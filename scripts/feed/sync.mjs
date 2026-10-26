#!/usr/bin/env node
// Feed maintenance for src/data/feed.json. No dependencies, Node 20+.
//
//   node scripts/feed/sync.mjs medium              pull new Medium articles from RSS
//   node scripts/feed/sync.mjs issue <body-file>   add an item from a "Share to feed" issue form
//   node scripts/feed/sync.mjs add                 add an item interactively (same fields as the form)
//
// `issue` is run by .github/workflows/feed.yml; locally use `npm run feed:add` / `npm run feed:sync`.

import { readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const MEDIUM_FEED = 'https://medium.com/feed/@orleone.dev';
const FEED_PATH = process.env.FEED_PATH
  ?? resolve(dirname(fileURLToPath(import.meta.url)), '../../src/data/feed.json');

const KINDS = { 'My post': 'post', 'Shared post': 'shared', Article: 'article', Talk: 'talk' };

// ---------- helpers ----------

const readFeed = () => JSON.parse(readFileSync(FEED_PATH, 'utf8'));

const writeFeed = (feed) => {
  feed.items.sort((a, b) => b.date.localeCompare(a.date));
  writeFileSync(FEED_PATH, `${JSON.stringify(feed, null, 2)}\n`);
};

const canonicalUrl = (raw) => {
  const url = new URL(raw.trim());
  url.hash = '';
  // Drop tracking parameters (Medium's ?source=rss…, utm_*, LinkedIn/X share params).
  const tracking = new Set(['source', 'rcm', 'trk', 'ref', 's', 't', 'si', 'fbclid', 'gclid']);
  for (const key of [...url.searchParams.keys()]) {
    if (tracking.has(key) || key.startsWith('utm_')) url.searchParams.delete(key);
  }
  url.hostname = url.hostname.replace(/^(www\.|mobile\.)/, '').replace(/^twitter\.com$/, 'x.com');
  return url.toString().replace(/\?$/, '');
};

const idFor = (url) => createHash('sha1').update(url).digest('hex').slice(0, 10);

const platformFor = (url) => {
  const host = new URL(url).hostname;
  if (host === 'x.com') return 'x';
  if (host.endsWith('linkedin.com')) return 'linkedin';
  if (host.endsWith('medium.com')) return 'medium';
  if (host.endsWith('youtube.com') || host === 'youtu.be') return 'youtube';
  if (host === 'bsky.app') return 'bluesky';
  if (host.endsWith('github.com')) return 'github';
  return 'web';
};

const decodeEntities = (s) => s
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ');

const stripHtml = (html) => decodeEntities(
  html.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, ' '),
).replace(/\s+/g, ' ').trim();

const truncate = (text, max = 220) => {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
};

const isoDate = (d) => new Date(d).toISOString().slice(0, 10);

// Best-effort Open Graph lookup. X and LinkedIn often block this — that's fine,
// the issue form fields take precedence anyway.
const fetchOpenGraph = async (url) => {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; orleone.dev feed bot)' },
      signal: AbortSignal.timeout(8000),
      redirect: 'follow',
    });
    if (!res.ok) return {};
    const html = (await res.text()).slice(0, 300_000);
    const meta = (prop) => {
      const m = html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${prop}["'][^>]*content=["']([^"']*)["']`, 'i'))
        ?? html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${prop}["']`, 'i'));
      return m ? decodeEntities(m[1]).trim() : undefined;
    };
    return {
      title: meta('og:title'),
      excerpt: meta('og:description') ?? meta('description'),
      image: meta('og:image'),
    };
  } catch {
    return {};
  }
};

// ---------- Medium ----------

const syncMedium = async () => {
  const res = await fetch(MEDIUM_FEED, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`Medium RSS returned ${res.status}`);
  const xml = await res.text();

  const feed = readFeed();
  const known = new Set(feed.items.map((i) => i.url));
  let added = 0;

  for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const tag = (name) => item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1];
    const url = canonicalUrl(decodeEntities(tag('link') ?? ''));
    // Existing entries are left alone so hand-edited text isn't overwritten.
    if (known.has(url)) continue;

    const content = decodeEntities(tag('content:encoded') ?? '');
    // Take opening paragraphs until there's enough text for a meaningful excerpt.
    let intro = '';
    for (const [, p] of content.matchAll(/<p>([\s\S]*?)<\/p>/g)) {
      intro = `${intro} ${stripHtml(p)}`.trim();
      if (intro.length >= 160) break;
    }
    feed.items.push({
      id: idFor(url),
      kind: 'article',
      platform: 'medium',
      source: 'medium',
      url,
      title: stripHtml(tag('title') ?? ''),
      excerpt: truncate(intro),
      date: isoDate(tag('pubDate')),
      image: content.match(/<img[^>]+src="([^"]+)"/)?.[1],
      tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)]
        .map(([, c]) => decodeEntities(c).replace(/-/g, ' '))
        .slice(0, 3),
    });
    known.add(url);
    added++;
  }

  writeFeed(feed);
  console.log(`Medium: ${added} new article(s).`);
  return added;
};

// ---------- Issue form ----------

// GitHub issue forms render as "### Label\n\nvalue" blocks; empty fields are "_No response_".
const parseIssueForm = (body) => {
  const fields = {};
  for (const block of body.split(/^### /m).slice(1)) {
    const [label, ...rest] = block.split('\n');
    const value = rest.join('\n').trim();
    fields[label.trim()] = value === '_No response_' ? '' : value;
  }
  return fields;
};

// `f` is keyed by the issue form's field labels — shared by the issue and interactive modes.
const addItem = async (f) => {
  if (!f.URL) throw new Error('The URL field is required.');

  let url;
  try {
    url = canonicalUrl(f.URL);
  } catch {
    throw new Error(`"${f.URL}" is not a valid URL.`);
  }

  const kind = KINDS[f.Type] ?? 'shared';
  const date = f.Date || isoDate(Date.now());
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`Date must be YYYY-MM-DD, got "${date}".`);

  const og = (!f.Title || !f.Excerpt || !f['Image URL']) ? await fetchOpenGraph(url) : {};

  const item = {
    id: idFor(url),
    kind,
    platform: platformFor(url),
    source: 'manual',
    url,
    title: f.Title || (kind === 'article' || kind === 'talk' ? og.title : undefined),
    // My own posts are shown in full; quotes of other people's posts stay short.
    excerpt: truncate(f.Excerpt || og.excerpt, kind === 'post' ? 1500 : 400),
    note: f['Your note'] || undefined,
    date,
    author: f['Author name']
      ? { name: f['Author name'], handle: f['Author handle'] ? f['Author handle'].replace(/^@?/, '@') : undefined }
      : undefined,
    image: f['Image URL'] || og.image,
    tags: f.Tags ? f.Tags.split(',').map((t) => t.trim()).filter(Boolean).slice(0, 4) : undefined,
  };
  // JSON.stringify drops undefined fields, so the stored item stays tidy.

  const feed = readFeed();
  const existing = feed.items.findIndex((i) => i.url === url);
  if (existing >= 0) feed.items[existing] = { ...feed.items[existing], ...JSON.parse(JSON.stringify(item)) };
  else feed.items.push(item);
  writeFeed(feed);

  console.log(`${existing >= 0 ? 'Updated' : 'Added'} ${kind} from ${item.platform}: ${url}`);
};

const addFromIssue = (bodyFile) => addItem(parseIssueForm(readFileSync(bodyFile, 'utf8')));

// ---------- Interactive ----------

const addInteractive = async () => {
  // Read lines through an async iterator so input is never lost, whether typed or pasted/piped.
  const rl = createInterface({ input: process.stdin, terminal: false });
  const lines = rl[Symbol.asyncIterator]();
  const nextLine = async () => {
    const { value, done } = await lines.next();
    if (done) throw new Error('Input ended early.');
    return value;
  };
  const ask = async (label, hint = '') => {
    process.stdout.write(`${label}${hint ? ` (${hint})` : ''}: `);
    return (await nextLine()).trim();
  };
  // Multi-line fields: pasted text can contain blank lines, so end with a line holding just "."
  const askLong = async (label) => {
    console.log(`${label} — paste the text, then a line with just "." to finish (or "." right away to skip):`);
    const collected = [];
    for (;;) {
      const line = await nextLine();
      if (line.trim() === '.') break;
      collected.push(line);
    }
    return collected.join('\n').trim();
  };

  try {
    const types = Object.keys(KINDS);
    const f = { URL: await ask('URL') };
    const choice = await ask('Type', types.map((t, i) => `${i + 1} ${t}`).join(', '));
    f.Type = types[Number(choice) - 1] ?? types[0];
    if (f.Type === 'Shared post') {
      f['Author name'] = await ask('Author name');
      f['Author handle'] = await ask('Author handle', 'optional');
      f['Your note'] = await askLong('Your note');
    }
    f.Excerpt = await askLong('Excerpt');
    if (f.Type === 'Article' || f.Type === 'Talk') f.Title = await ask('Title', 'optional');
    f.Date = await ask('Date', 'YYYY-MM-DD, empty = today');
    f.Tags = await ask('Tags', 'comma separated, optional');
    f['Image URL'] = await ask('Image URL', 'optional, e.g. /images/photo.jpg');
    await addItem(f);
  } finally {
    rl.close();
  }
};

// ---------- main ----------

const [command, arg] = process.argv.slice(2);
try {
  if (command === 'medium') await syncMedium();
  else if (command === 'issue' && arg) await addFromIssue(arg);
  else if (command === 'add') await addInteractive();
  else {
    console.error('Usage: sync.mjs medium | sync.mjs issue <body-file> | sync.mjs add');
    process.exit(2);
  }
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
