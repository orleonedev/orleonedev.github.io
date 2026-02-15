import React from 'react';
import GlassCard from '../ui/GlassCard';
import { aboutText, aboutHighlightedText } from '../../data/about';
import { MultilineHighlightedTypography } from '../MultilineHighlightedTypography';

const BioSection: React.FC = () => {
  const images = [
    "/oldPortfolioFiles/assets/img/ProfileSquaredMedium.png",
    "/src/assets/images/medium_gameplayKit.jpeg", // Placeholder for additional image
    "/src/assets/images/medium_wwdc23.jpeg"       // Placeholder for additional image
  ];

  return (
    <section className="py-24 px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
      {/* Images Section */}
      <div className="md:col-span-4 lg:col-span-3">
        {/* Mobile: Horizontal Scroll */}
        <div className="flex md:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-64 snap-center">
              <img
                src={img}
                alt={`Oreste Leone ${i + 1}`}
                className="w-full h-full object-cover rounded-[28px] border border-white/10 shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Desktop: Vertical Stack matching Bio Height */}
        <div className="hidden md:flex flex-col gap-4 h-full">
          {images.map((img, i) => (
            <div key={i} className="flex-1 min-h-0">
              <img
                src={img}
                alt={`Oreste Leone ${i + 1}`}
                className="w-full h-full object-cover rounded-[32px] border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bio Content */}
      <div className="md:col-span-8 lg:col-span-9 flex">
        <GlassCard className="p-10 w-full flex flex-col justify-center" hover={false}>
          <h3 className="text-[#D49D3A] font-bold text-xs uppercase tracking-[0.3em] mb-6">The Architect</h3>
          <MultilineHighlightedTypography
            text={aboutText}
            highlightPhrases={aboutHighlightedText}
            highlightColor="#D49D3A"
            className="text-md md:text-lg lg:text-xl text-white/70 leading-relaxed font-medium"
          />
        </GlassCard>
      </div>
    </section>
  );
};

export default BioSection;
