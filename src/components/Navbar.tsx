import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { title: 'Home', to: 'hero' },
  { title: 'About', to: 'about' },
  { title: 'Portfolio', to: 'portfolio' },
  { title: 'Articles', to: 'articles' },
  { title: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (to: string) => {
    setIsOpen(false);
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  return (
    <nav
      className={`fixed top-8 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#161B22]/85 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">
              orleone<span className="text-[#D49D3A]">.dev</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.title}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[#D49D3A] cursor-pointer transition-colors active:text-[#D49D3A]"
                  activeClass="text-[#D49D3A]"
                >
                  {link.title}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#161B22] border-b border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleMobileLinkClick(link.to)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#D49D3A] hover:bg-gray-700"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;