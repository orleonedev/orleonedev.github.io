import React from 'react';
import { skillCategories } from '../../data/skills';
import GlassCard from '../ui/GlassCard';

const SkillsGrid: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="w-12 h-[1px] bg-[#D49D3A]/50"></span>
        Core Competencies
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <GlassCard key={i} className="p-8" hover={false}>
            <h4 className="text-[#D49D3A] font-bold text-xs uppercase tracking-widest mb-6">{cat.category}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/70 hover:border-[#D49D3A]/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
