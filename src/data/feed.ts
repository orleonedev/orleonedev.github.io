import feedData from './feed.json';

// feed.json is maintained by scripts/feed/sync.mjs (Medium RSS + "Share to feed" issues).
// Only real, published items belong there — no placeholders.

export type FeedKind = 'article' | 'post' | 'shared' | 'talk';
export type FeedPlatform = 'medium' | 'x' | 'linkedin' | 'youtube' | 'bluesky' | 'github' | 'web';

export interface FeedAuthor {
  name: string;
  handle?: string;
}

export interface FeedItem {
  id: string;
  kind: FeedKind;
  platform: FeedPlatform;
  source: 'manual' | 'medium';
  url: string;
  date: string; // YYYY-MM-DD
  title?: string;
  excerpt?: string;
  /** My own comment on the item — most useful on shared posts. */
  note?: string;
  author?: FeedAuthor;
  image?: string;
  tags?: string[];
}

export const feed: FeedItem[] = (feedData.items as FeedItem[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

export const formatFeedDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
