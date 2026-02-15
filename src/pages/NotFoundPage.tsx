import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8 bg-[#0D1117]">
      <h1 className="text-8xl font-bold mb-4 text-[#D49D3A]">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-2 text-white">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#D49D3A] text-black font-bold rounded-md hover:bg-[#D49D3A]/90 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;