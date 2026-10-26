import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => (
  <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
    <p>© {new Date().getFullYear()} Oreste Leone</p>
    <a href="mailto:orleone.dev@gmail.com" className="hover:text-white transition-colors">
      orleone.dev@gmail.com
    </a>
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
    >
      Back to top <FiArrowUp />
    </button>
  </footer>
);

export default Footer;
