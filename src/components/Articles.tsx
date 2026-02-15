import React from 'react';
import { articles } from '../data/articles';
import type { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-[#161B22] border border-gray-800 rounded-lg overflow-hidden flex flex-col h-full hover:bg-gray-800/50 transition-colors">
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-40 w-full object-cover"
        />
        <div className="p-5 flex-grow text-left">
          <h3 className="text-lg font-bold mb-2 text-white">
            {article.title}
          </h3>
          <p className="text-sm text-gray-400">
            {article.mentioned ? 'Mentioned in ' : 'Published on '} {article.platform}
          </p>
        </div>
      </a>
    </div>
  );
};

const Articles: React.FC = () => {
  return (
    <div id="articles" className="p-8 my-16 text-center">
      <h2 className="text-4xl font-bold text-center mb-12">
        Articles and Mentions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <a 
        href="https://medium.com/@orleone.dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-[#D49D3A] text-[#D49D3A] rounded-md hover:bg-[#D49D3A]/10 transition-colors"
      >
        Read Articles on Medium
      </a>
    </div>
  );
};

export default Articles;