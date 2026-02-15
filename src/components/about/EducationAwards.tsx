import React from 'react';
import { education } from '../../data/education';
import { awards } from '../../data/awards';
import GlassCard from '../ui/GlassCard';

const EducationAwards: React.FC = () => {
  return (
    <section className="py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#D49D3A]/50"></span>
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <GlassCard key={i} className="p-6" hover={true}>
              <h4 className="font-bold text-white mb-1">{edu.role}</h4>
              <p className="text-[#D49D3A] text-sm mb-3">{edu.company}</p>
              <p className="text-white/50 text-sm leading-relaxed">{edu.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#D49D3A]/50"></span>
          Recognition
        </h3>
        <div className="space-y-4">
          {awards.map((award, i) => (
            <GlassCard key={i} className="p-5 flex items-center justify-between group" hover={true}>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#D49D3A] transition-colors">{award.title}</h4>
                <p className="text-white/40 text-xs mt-1">{award.date}</p>
              </div>
              {award.link && (
                <a 
                  href={award.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D49D3A] text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Verify
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAwards;
