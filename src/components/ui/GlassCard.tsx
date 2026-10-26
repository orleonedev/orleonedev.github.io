import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, spring } from '../../lib/motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  strong?: boolean;
}

/** Liquid-glass surface (see `.glass` / `.glass-strong` in index.css). */
const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true, strong = false }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={hover && !reduceMotion ? { y: -4, scale: 1.005 } : undefined}
      transition={spring}
      className={`${strong ? 'glass-strong' : 'glass'} overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
