import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaLinkedin, FaXTwitter, FaInstagram, FaGlobe, FaClock } from 'react-icons/fa6';
import { FiExternalLink, FiTrendingUp } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import type { Insight } from '../../data/insights';

const platformIcons = {
  medium: <FaMedium />,
  linkedin: <FaLinkedin className="text-[#0077B5]" />,
  x: <FaXTwitter />,
  instagram: <FaInstagram className="text-[#E4405F]" />,
  press: <FaGlobe className="text-[#D49D3A]" />,
};

interface InsightCardProps {
  insight: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const isFeatured = insight.featured;
  
  return (
    <motion.div
      layout
      className={`${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <GlassCard className="h-full group relative flex flex-col overflow-hidden">
        {/* Source Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-lg">
          {platformIcons[insight.platform]}
          <span className="uppercase tracking-wider opacity-80">{insight.platform}</span>
        </div>

        {/* Image Container */}
        {insight.image && (
          <div className={`relative overflow-hidden ${isFeatured ? 'h-64' : 'h-48'}`}>
            <motion.img
              src={insight.image}
              alt={insight.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60" />
            
            {isFeatured && (
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#D49D3A] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-xl shadow-[#D49D3A]/20">
                <FiTrendingUp /> Featured
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
            <span>{insight.date}</span>
            {insight.readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-1.5">
                  <FaClock size={10} /> {insight.readingTime}
                </span>
              </>
            )}
          </div>

          <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-white mb-3 group-hover:text-[#D49D3A] transition-colors leading-tight`}>
            {insight.title}
          </h3>
          
          <p className={`text-gray-400 leading-relaxed mb-6 ${isFeatured ? 'text-lg' : 'text-sm'}`}>
            {insight.description}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {insight.tags?.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            <a
              href={insight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-[#D49D3A] hover:border-[#D49D3A] transition-all duration-300 transform group-hover:translate-x-1"
            >
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default InsightCard;
