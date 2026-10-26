import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen, FiSend } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import { revealOnScroll } from '../../lib/motion';

const previews = [
  {
    title: 'Insights',
    description: 'Articles, posts and links worth sharing about building for Apple platforms.',
    to: '/insights',
    icon: <FiBookOpen />,
  },
  {
    title: 'Connect',
    description: 'Freelance projects, consulting and one‑to‑one sessions for developers.',
    to: '/connect',
    icon: <FiSend />,
  },
];

const SectionPreviews: React.FC = () => (
  <motion.section {...revealOnScroll} className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    {previews.map((preview) => (
      <GlassCard key={preview.to} className="group">
        <Link to={preview.to} className="flex flex-col gap-6 p-7 md:p-8 h-full">
          <span className="glass-chip w-12 h-12 flex items-center justify-center text-accent text-xl">
            {preview.icon}
          </span>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">{preview.title}</h3>
            <p className="text-white/70">{preview.description}</p>
          </div>
          <span className="mt-auto inline-flex items-center gap-2 text-accent font-semibold">
            Open <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
          </span>
        </Link>
      </GlassCard>
    ))}
  </motion.section>
);

export default SectionPreviews;
