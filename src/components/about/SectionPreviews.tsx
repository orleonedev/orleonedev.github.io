import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';

interface PreviewRowProps {
  title: string;
  description: string;
  to: string;
  cta: string;
}

const PreviewRow: React.FC<PreviewRowProps> = ({ title, description, to, cta }) => (
  <GlassCard className="p-8 group" hover={true}>
    <Link to={to} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-xl">
        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D49D3A] transition-colors">{title}</h4>
        <p className="text-white/50">{description}</p>
      </div>
      <div className="flex items-center gap-3 text-[#D49D3A] font-bold uppercase tracking-widest text-sm">
        {cta} <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  </GlassCard>
);

const SectionPreviews: React.FC = () => {
  return (
    <section className="py-24 px-6 space-y-6">
      <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="w-12 h-[1px] bg-[#D49D3A]/50"></span>
        Explore Further
      </h3>
      <PreviewRow 
        title="Project Showcase" 
        description="Deep dive into technical case studies, from indie hits with millions of users to enterprise-grade architectures."
        to="/showcase"
        cta="View Portfolio"
      />
      <PreviewRow 
        title="Professional Insights" 
        description="Thought leadership on iOS architecture, SwiftUI patterns, and the future of mobile engineering."
        to="/insights"
        cta="Read Articles"
      />
      <PreviewRow 
        title="Let's Connect" 
        description="Available for architectural consulting, high-impact freelance projects, or professional collaboration."
        to="/connect"
        cta="Get in touch"
      />
    </section>
  );
};

export default SectionPreviews;
