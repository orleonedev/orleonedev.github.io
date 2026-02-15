import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const AboutHero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <h2 className="text-[#D49D3A] font-bold tracking-[0.2em] uppercase text-sm mb-6">
          Senior iOS Software Engineer
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Architecting Scalable <br />
          <span className="text-white/40">Mobile Ecosystems.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
          Specializing in high-performance enterprise solutions and 
          consumer apps with over 15M+ global downloads. 
          Driven by clean architecture and seamless user experiences.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: <FaGithub />, href: "https://github.com/orleonedev", label: "GitHub" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/orleonedev", label: "LinkedIn" },
            { icon: <FaMedium />, href: "https://medium.com/@orleone.dev", label: "Medium" }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/40 hover:text-[#D49D3A] hover:border-[#D49D3A]/30 transition-colors shadow-xl backdrop-blur-md"
            >
              <span className="text-2xl">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Visual Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D49D3A]/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default AboutHero;
