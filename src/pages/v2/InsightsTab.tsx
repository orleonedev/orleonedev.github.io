import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { insights } from '../../data/insights';
import InsightCard from '../../components/insights/InsightCard';

type FilterType = 'all' | 'article' | 'social' | 'news' | 'citation';

const InsightsTab: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredInsights = insights.filter(
    item => filter === 'all' || item.type === filter
  );

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Updates', value: 'all' },
    { label: 'Articles', value: 'article' },
    { label: 'Social', value: 'social' },
    { label: 'Press & Media', value: 'citation' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Latest <span className="text-[#D49D3A]">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            A curated feed of professional updates, technical deep-dives, and industry citations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 w-fit">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                filter === f.value
                  ? 'bg-[#D49D3A] text-white shadow-lg shadow-[#D49D3A]/20'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
      >
        <AnimatePresence mode="popLayout">
          {filteredInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredInsights.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center"
        >
          <p className="text-gray-500 text-lg">No updates found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

export default InsightsTab;
