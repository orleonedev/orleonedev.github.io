import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import { revealOnScroll } from '../../lib/motion';

const ExperienceTimeline: React.FC = () => (
  <motion.section {...revealOnScroll} className="py-16 md:py-24">
    <SectionHeader eyebrow="Experience" title="Where I've been building" />

    <ol className="relative ml-2 md:ml-4 border-l border-white/15 space-y-6 md:space-y-8">
      {experiences.map((exp) => (
        <li key={`${exp.company}-${exp.role}`} className="relative pl-6 md:pl-10">
          <span className="absolute -left-[6px] top-8 w-[11px] h-[11px] rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />
          <GlassCard className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <span className="glass-chip self-start px-3 py-1 text-xs font-mono text-white/80 whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            {exp.highlights && (
              <ul className="space-y-2 text-white/75 leading-relaxed">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/50" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </GlassCard>
        </li>
      ))}
    </ol>
  </motion.section>
);

export default ExperienceTimeline;
