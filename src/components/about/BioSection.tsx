import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import { aboutText, aboutHighlightedText } from '../../data/about';
import { MultilineHighlightedTypography } from '../MultilineHighlightedTypography';
import { fadeUp, revealOnScroll } from '../../lib/motion';
import meetupPhoto from '../../assets/images/Napoli-Meetup-edit.jpg';

const photos = [
  { src: '/images/wwdc26_totem.jpg', alt: 'Oreste at Apple Park during WWDC26' },
  { src: meetupPhoto, alt: 'Oreste at a developer meetup in Naples' },
];

const BioSection: React.FC = () => (
  <motion.section {...revealOnScroll} className="py-16 md:py-24">
    <SectionHeader eyebrow="About" title="Beyond the ticket" />

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
      <div className="md:col-span-4 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {photos.map((photo) => (
          <motion.div
            key={photo.src}
            variants={fadeUp}
            className="glass p-1.5 flex-shrink-0 w-64 h-64 md:w-auto md:h-auto md:flex-1 md:min-h-56 snap-center"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-[22px]"
            />
          </motion.div>
        ))}
      </div>

      <div className="md:col-span-8 flex">
        <GlassCard className="p-7 md:p-10 w-full" hover={false}>
          <MultilineHighlightedTypography
            text={aboutText}
            highlightPhrases={aboutHighlightedText}
            className="text-base md:text-lg text-white/80 leading-relaxed"
          />
        </GlassCard>
      </div>
    </div>
  </motion.section>
);

export default BioSection;
