import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8 py-20"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi 👋, I'm <span className="text-[#D49D3A]">Oreste Leone</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          iOS Engineer and Indie Game Developer
        </h2>
        <div className="flex justify-center gap-4 my-8">
          <a 
            href="https://www.linkedin.com/in/orleonedev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#D49D3A]/10 text-gray-300 hover:text-[#D49D3A] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/orleonedev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#D49D3A]/10 text-gray-300 hover:text-[#D49D3A] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://medium.com/@orleone.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#D49D3A]/10 text-gray-300 hover:text-[#D49D3A] transition-colors"
          >
            <FaMedium size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;