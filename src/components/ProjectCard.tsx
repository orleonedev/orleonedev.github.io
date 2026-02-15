import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-[#161B22] border border-gray-800 rounded-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-5 flex-grow text-left">
        <h3 className="text-xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1 my-3">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          {project.description}
        </p>
      </div>
      <div className="px-5 py-4 border-t border-gray-800 flex items-center gap-2">
        <Link 
          to={`/project/${project.id}`} 
          className="text-sm font-semibold text-[#D49D3A] hover:text-[#D49D3A]/80 transition-colors"
        >
          View Details
        </Link>
        <div className="ml-auto flex gap-2">
          {project.gitHubUrl && (
            <a 
              href={project.gitHubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 text-gray-400 hover:text-[#D49D3A] transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 text-gray-400 hover:text-[#D49D3A] transition-colors"
            >
              <FaLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;