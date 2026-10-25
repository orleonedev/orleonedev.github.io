import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiSmartphone, FiLayers, FiTool } from 'react-icons/fi';
import { skillCategories } from '../../data/skills';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import { revealOnScroll } from '../../lib/motion';

const categoryIcons = [<FiUsers />, <FiSmartphone />, <FiLayers />, <FiTool />];

const SkillsGrid: React.FC = () => (
  <motion.section {...revealOnScroll} className="py-16 md:py-24">
    <SectionHeader eyebrow="Competencies" title="What I bring to a team" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {skillCategories.map((cat, i) => (
        <GlassCard key={cat.category} className="p-7 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="glass-chip w-10 h-10 flex items-center justify-center text-accent text-lg">
              {categoryIcons[i % categoryIcons.length]}
            </span>
            <h3 className="text-lg font-semibold tracking-tight">{cat.category}</h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <li key={skill} className="glass-chip px-3.5 py-1.5 text-sm font-medium text-white/85">
                {skill}
              </li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  </motion.section>
);

export default SkillsGrid;
