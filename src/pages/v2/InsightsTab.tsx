import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { feed } from '../../data/feed';
import type { FeedItem, FeedKind } from '../../data/feed';
import FeedCard from '../../components/feed/FeedCard';
import { useColumnCount } from '../../hooks/useColumnCount';
import { fadeUp, spring, stagger } from '../../lib/motion';

type Filter = 'all' | 'writing' | 'post' | 'shared';

const filters: { value: Filter; label: string; kinds: FeedKind[] }[] = [
  { value: 'all', label: 'All', kinds: ['article', 'talk', 'post', 'shared'] },
  { value: 'writing', label: 'Writing & talks', kinds: ['article', 'talk'] },
  { value: 'post', label: 'Posts', kinds: ['post'] },
  { value: 'shared', label: 'Shared', kinds: ['shared'] },
];

// Only offer filters that have content (and skip the bar entirely if there's a single category).
const availableFilters = filters.filter(
  (f) => f.value === 'all' || feed.some((item) => f.kinds.includes(item.kind)),
);

// Rough relative card height, used to balance the masonry columns.
const estimateHeight = (item: FeedItem) =>
  1 + (item.image ? 1.6 : 0) + ((item.excerpt?.length ?? 0) + (item.note?.length ?? 0)) / 260 + (item.title ? 0.4 : 0);

// Each item goes to the currently shortest column, in date order, so the
// newest items stay at the top and columns end at similar heights.
const toColumns = (items: FeedItem[], count: number) => {
  const columns: FeedItem[][] = Array.from({ length: count }, () => []);
  const heights = new Array<number>(count).fill(0);
  for (const item of items) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += estimateHeight(item);
  }
  return columns;
};

const InsightsTab: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const gridRef = useRef<HTMLDivElement>(null);
  const columnCount = useColumnCount(gridRef);

  const items = useMemo(() => {
    const kinds = filters.find((f) => f.value === filter)?.kinds ?? [];
    return feed.filter((item) => kinds.includes(item.kind));
  }, [filter]);
  const columns = useMemo(() => toColumns(items, columnCount), [items, columnCount]);

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="py-6 md:py-10">
      <motion.div variants={fadeUp} className="space-y-4 mb-8 max-w-2xl">
        <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Insights</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">Feed</h1>
        <p className="text-white/75 text-lg leading-relaxed">
          What I write, post and find worth sharing about mobile engineering, architecture and the craft of building apps.
        </p>
      </motion.div>

      {availableFilters.length > 2 && (
        <motion.div variants={fadeUp} className="sticky top-14 md:top-36 z-30 mb-6 -mx-1 overflow-x-auto no-scrollbar">
          <div className="glass-strong !rounded-full inline-flex gap-1 p-1.5 mx-1">
            <LayoutGroup id="feed-filters">
              {availableFilters.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value)}
                  aria-pressed={filter === value}
                  className={`relative px-4 h-10 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    filter === value ? 'text-accent' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {filter === value && (
                    <motion.span layoutId="feed-filter-pill" className="glass-lens absolute inset-0 rounded-full" transition={spring} />
                  )}
                  <span className="relative">{label}</span>
                </button>
              ))}
            </LayoutGroup>
          </div>
        </motion.div>
      )}

      <div ref={gridRef} className="flex items-start gap-4 md:gap-5">
        <LayoutGroup id="feed-items">
          {columns.map((column, i) => (
            <motion.ol key={i} variants={stagger} className="flex-1 min-w-0 space-y-4 md:space-y-5">
              <AnimatePresence mode="popLayout" initial={false}>
                {column.map((item) => (
                  <motion.li
                    key={item.id}
                    layout="position"
                    variants={fadeUp}
                    exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.15 } }}
                  >
                    <FeedCard item={item} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ol>
          ))}
        </LayoutGroup>
      </div>

      {items.length === 0 && <p className="py-24 text-center text-white/60 text-lg">Nothing here yet.</p>}
    </motion.div>
  );
};

export default InsightsTab;
