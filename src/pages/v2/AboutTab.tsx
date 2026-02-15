import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import BioSection from '../../components/about/BioSection';
import ExperienceTimeline from '../../components/about/ExperienceTimeline';
import SkillsGrid from '../../components/about/SkillsGrid';
import EducationAwards from '../../components/about/EducationAwards';
import SectionPreviews from '../../components/about/SectionPreviews';

const AboutTab: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <AboutHero />
      <BioSection />
      <SkillsGrid />
      <ExperienceTimeline />
      <EducationAwards />
      <SectionPreviews />
    </div>
  );
};

export default AboutTab;
