import React from 'react';
import { FaMedium, FaLinkedin, FaXTwitter, FaYoutube, FaBluesky, FaGithub, FaGlobe } from 'react-icons/fa6';
import { FiArrowUpRight, FiRepeat, FiMic } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import { formatFeedDate } from '../../data/feed';
import type { FeedItem, FeedPlatform } from '../../data/feed';
import profilePic from '../../assets/images/profile_pic_squared.jpg';

const platforms: Record<FeedPlatform, { icon: React.ReactNode; label: string }> = {
  medium: { icon: <FaMedium />, label: 'Medium' },
  x: { icon: <FaXTwitter />, label: 'X' },
  linkedin: { icon: <FaLinkedin />, label: 'LinkedIn' },
  youtube: { icon: <FaYoutube />, label: 'YouTube' },
  bluesky: { icon: <FaBluesky />, label: 'Bluesky' },
  github: { icon: <FaGithub />, label: 'GitHub' },
  web: { icon: <FaGlobe />, label: 'Web' },
};

const kindLabel: Record<FeedItem['kind'], string> = {
  article: 'Article',
  post: 'Post',
  shared: 'Shared',
  talk: 'Talk',
};

const initials = (name: string) =>
  name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();

/** Header row: who posted (me, or me sharing), kind, platform and date. */
const CardHeader: React.FC<{ item: FeedItem }> = ({ item }) => {
  const platform = platforms[item.platform];
  return (
    <div className="flex items-center gap-3">
      <img src={profilePic} alt="" className="w-9 h-9 rounded-full object-cover ring-1 ring-white/20" />
      <div className="flex-1 min-w-0 leading-tight">
        <p className="font-semibold text-[15px] flex items-center gap-1.5">
          Oreste Leone
          {item.kind === 'shared' && (
            <span className="inline-flex items-center gap-1 text-white/60 font-normal text-sm">
              <FiRepeat className="text-accent" /> shared
            </span>
          )}
        </p>
        <p className="text-xs text-white/60">{formatFeedDate(item.date)}</p>
      </div>
      <span className="glass-chip inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-white/85">
        {item.kind === 'talk' ? <FiMic /> : platform.icon}
        {/* The X logo is its own label */}
        {item.kind === 'post' || item.kind === 'shared'
          ? item.platform !== 'x' && platform.label
          : kindLabel[item.kind]}
      </span>
    </div>
  );
};

const Tags: React.FC<{ tags?: string[] }> = ({ tags }) =>
  tags?.length ? (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="glass-chip px-2.5 py-1 text-[11px] font-semibold text-white/75">{tag}</li>
      ))}
    </ul>
  ) : null;

const OpenButton: React.FC = () => (
  <span className="glass-chip w-10 h-10 flex-shrink-0 flex items-center justify-center text-lg group-hover:bg-accent group-hover:text-ink transition-colors">
    <FiArrowUpRight />
  </span>
);

/** Article or talk: big image, title, excerpt. */
const ArticleBody: React.FC<{ item: FeedItem }> = ({ item }) => (
  <>
    {item.image && (
      <div className="overflow-hidden rounded-[20px] aspect-[16/9] bg-white/5">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-ios group-hover:scale-105"
        />
      </div>
    )}
    <div>
      {item.title && (
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
      )}
      {item.excerpt && <p className="text-white/75 leading-relaxed">{item.excerpt}</p>}
    </div>
  </>
);

/** My own social post: photo first, text clamped — the full post is one tap away. */
const PostBody: React.FC<{ item: FeedItem }> = ({ item }) => {
  const isLong = (item.excerpt?.length ?? 0) > 320;
  return (
    <>
      {item.image && (
        <div className="overflow-hidden rounded-[20px] aspect-[4/3] bg-white/5">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-ios group-hover:scale-105"
          />
        </div>
      )}
      {item.title && <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>}
      {item.excerpt && (
        <div>
          <p className={`text-white/85 text-[16px] leading-relaxed whitespace-pre-line ${isLong ? 'line-clamp-6' : ''}`}>
            {item.excerpt}
          </p>
          {isLong && (
            <span className="inline-block mt-2 text-sm font-semibold text-accent">
              Read more on {platforms[item.platform].label}
            </span>
          )}
        </div>
      )}
    </>
  );
};

/** Someone else's post: my note on top, their post quoted in an inset panel. */
const SharedBody: React.FC<{ item: FeedItem }> = ({ item }) => (
  <>
    {item.note && <p className="text-white/90 text-[17px] leading-relaxed whitespace-pre-line">{item.note}</p>}
    <div className="rounded-[22px] bg-white/[0.04] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] p-4 md:p-5 space-y-3">
      {item.author && (
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-white/25 to-white/5 ring-1 ring-white/15 flex items-center justify-center text-xs font-bold">
            {initials(item.author.name)}
          </span>
          <div className="leading-tight min-w-0">
            <p className="font-semibold text-sm truncate">{item.author.name}</p>
            {item.author.handle && <p className="text-xs text-white/60 truncate">{item.author.handle}</p>}
          </div>
        </div>
      )}
      {item.title && <h3 className="font-semibold tracking-tight group-hover:text-accent transition-colors">{item.title}</h3>}
      {item.excerpt && <p className="text-white/75 text-[15px] leading-relaxed whitespace-pre-line">{item.excerpt}</p>}
      {item.image && (
        <div className="overflow-hidden rounded-[16px] bg-white/5">
          <img src={item.image} alt="" loading="lazy" className="w-full max-h-80 object-cover" />
        </div>
      )}
    </div>
  </>
);

const FeedCard: React.FC<{ item: FeedItem }> = ({ item }) => {
  const Body = item.kind === 'shared' ? SharedBody : item.kind === 'post' ? PostBody : ArticleBody;
  const linkLabel = item.title ?? `${kindLabel[item.kind]} on ${platforms[item.platform].label}`;

  return (
    <GlassCard className="group">
      <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={linkLabel} className="flex flex-col gap-4 p-5 md:p-6">
        <CardHeader item={item} />
        <Body item={item} />
        <div className="flex items-end justify-between gap-4">
          <Tags tags={item.tags} />
          <span className="ml-auto"><OpenButton /></span>
        </div>
      </a>
    </GlassCard>
  );
};

export default FeedCard;
