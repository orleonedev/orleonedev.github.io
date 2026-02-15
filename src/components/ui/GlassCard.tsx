import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, backgroundColor: 'rgba(255, 255, 255, 0.04)' } : {}}
      className={`bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[24px] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
