import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <motion.div variants={fadeUp} className={`mb-10 md:mb-12 ${className}`}>
    <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
  </motion.div>
);

export default SectionHeader;
