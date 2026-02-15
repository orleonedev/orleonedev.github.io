import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import NotFoundPage from './NotFoundPage';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-block px-6 py-2 bg-[#D49D3A] text-black font-bold rounded-md hover:bg-[#D49D3A]/90 transition-colors mb-8"
      >
        Back to Home
      </Link>
      <div className="bg-[#161B22] border border-gray-800 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {project.appStoreUrl && (
              <a 
                href={project.appStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#D49D3A] text-[#D49D3A] rounded-md hover:bg-[#D49D3A]/10 transition-colors"
              >
                App Store
              </a>
            )}
            {project.gitHubUrl && (
              <a 
                href={project.gitHubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#D49D3A] text-[#D49D3A] rounded-md hover:bg-[#D49D3A]/10 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.websiteUrl && (
              <a 
                href={project.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#D49D3A] text-[#D49D3A] rounded-md hover:bg-[#D49D3A]/10 transition-colors"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;