import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { education } from '../../data/education';
import { awards } from '../../data/awards';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import { revealOnScroll } from '../../lib/motion';

const EducationAwards: React.FC = () => (
  <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
    <motion.div {...revealOnScroll}>
      <SectionHeader eyebrow="Education" title="Foundations" />
      <div className="space-y-4">
        {education.map((edu) => (
          <GlassCard key={edu.role} className="p-6">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-semibold">{edu.role}</h3>
              <span className="text-xs font-mono text-white/60 whitespace-nowrap mt-1">{edu.duration}</span>
            </div>
            <p className="text-accent text-sm mb-3">{edu.company}</p>
            <p className="text-white/70 text-sm leading-relaxed">{edu.description}</p>
          </GlassCard>
        ))}
      </div>
    </motion.div>

    <motion.div {...revealOnScroll}>
      <SectionHeader eyebrow="Recognition" title="Awards & milestones" />
      <div className="space-y-3">
        {awards.map((award) => (
          <GlassCard key={award.title} className={`p-5 flex gap-4 ${award.description ? 'items-start' : 'items-center'}`}>
            <span className="glass-chip w-10 h-10 flex-shrink-0 flex items-center justify-center text-accent">
              <FiAward />
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium leading-snug">{award.title}</h3>
              <p className="text-white/60 text-xs mt-1">{award.date}</p>
              {award.description && <p className="text-white/70 text-sm leading-relaxed mt-2">{award.description}</p>}
            </div>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`More about: ${award.title}`}
                className="text-white/70 hover:text-accent transition-colors"
              >
                <FiExternalLink />
              </a>
            )}
          </GlassCard>
        ))}
      </div>
    </motion.div>
  </section>
);

export default EducationAwards;
