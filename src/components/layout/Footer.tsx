import React from 'react';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import { openMail } from '../../lib/contact';
import { socials } from '../../data/socials';

const iconButton =
  'glass !rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-base sm:text-lg text-white/75 hover:text-white transition-colors';

const Footer: React.FC = () => (
  <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-6 text-sm text-white/60">
    <ul className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
      <li>
        {/* A button, not a mailto link, so the address never sits in the page (see lib/contact.ts). */}
        <button type="button" onClick={() => openMail()} aria-label="Email" title="Email" className={iconButton}>
          <FiMail />
        </button>
      </li>
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={iconButton}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>

    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} Oreste Leone</p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
      >
        Back to top <FiArrowUp />
      </button>
    </div>
  </footer>
);

export default Footer;
