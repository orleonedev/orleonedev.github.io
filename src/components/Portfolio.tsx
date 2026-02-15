import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {

  return (
    <div id="portfolio" className="p-8 my-16 text-center">
      <h2 className="text-4xl font-bold text-center mb-12">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a 
        href="https://github.com/orleonedev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-[#D49D3A] text-[#D49D3A] rounded-md hover:bg-[#D49D3A]/10 transition-colors"
      >
        See More on GitHub
      </a>
    </div>
  );
};

export default Portfolio;