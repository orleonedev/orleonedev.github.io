import React from 'react';
import { experiences } from '../../data/experience';
import GlassCard from '../ui/GlassCard';

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="w-12 h-[1px] bg-[#D49D3A]/50"></span>
        Professional Trajectory
      </h3>
      
      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-[#D49D3A] rounded-full shadow-[0_0_10px_rgba(212,157,58,0.8)]" />
            
            <GlassCard className="p-8 max-w-4xl" hover={true}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-[#D49D3A] font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {exp.duration}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
