import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { FaUser, FaPaperPlane, FaColumns, FaThLarge, FaLayerGroup, FaNewspaper } from 'react-icons/fa';
import { useNavigation } from '../../context/NavigationContext';

const navItems = [
  { title: 'About', to: '/', icon: <FaUser /> },
  { title: 'Showcase', to: '/showcase', icon: <FaLayerGroup /> },
  { title: 'Insights', to: '/insights', icon: <FaNewspaper /> },
  { title: 'Connect', to: '/connect', icon: <FaPaperPlane /> },
];

const AdaptiveNav: React.FC = () => {
  const { isSidebar, setIsSidebar } = useNavigation();
  const location = useLocation();

  const springConfig: Transition = { type: "spring", stiffness: 350, damping: 30 };

  return (
    <LayoutGroup>
      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-8 inset-x-6 z-50">
        <div className="bg-white/[0.03] backdrop-blur-[32px] border border-white/10 rounded-[28px] flex items-center p-1.5 h-18 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.title}
                to={item.to}
                className="relative flex flex-1 flex-col items-center justify-center h-full rounded-[22px] transition-colors duration-300"
              >
                <motion.div 
                  className="relative flex flex-col items-center justify-center w-full h-full"
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-mobile"
                      className="absolute inset-0 bg-white/[0.08] rounded-[22px] shadow-[inset_0_0_20px_rgba(212,157,58,0.05)] border border-white/5"
                      transition={springConfig}
                    />
                  )}
                  <span className={`text-xl mb-1 z-10 ${isActive ? 'text-[#D49D3A] drop-shadow-[0_0_8px_rgba(212,157,58,0.4)]' : 'text-white/40'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.1em] z-10 ${isActive ? 'text-[#D49D3A]' : 'text-white/40'}`}>
                    {item.title}
                  </span>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Desktop Adaptive Navigation */}
      <motion.div 
        layout
        transition={springConfig}
        className={`hidden md:flex fixed z-50 ${
          isSidebar 
            ? 'left-8 top-18 bottom-8 w-64' 
            : 'top-14 left-1/2 -translate-x-1/2 w-fit'
        }`}
      >
        <motion.div 
          layout
          className={`w-full bg-white/[0.02] backdrop-blur-[40px] border border-white/10 rounded-[32px] p-2 flex shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden ${
            isSidebar ? 'flex-col gap-4' : 'flex-row items-center gap-1'
          }`}
        >
          {/* Mode Switcher */}
          <motion.button 
            layout="position"
            onClick={() => setIsSidebar(!isSidebar)}
            className={`flex items-center justify-center rounded-[20px] hover:bg-white/5 text-white/30 hover:text-white transition-all flex-shrink-0 ${
              isSidebar ? 'h-12 w-full mb-2' : 'h-10 w-10 mr-1'
            }`}
          >
            {isSidebar ? <FaThLarge /> : <FaColumns />}
          </motion.button>
          
          <motion.div layout="position" className={`flex flex-shrink-0 ${isSidebar ? 'flex-col gap-1 w-full' : 'flex-row gap-1'}`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.title}
                  to={item.to}
                  className={`relative flex items-center rounded-[20px] transition-colors group flex-shrink-0 ${
                    isActive ? 'text-[#D49D3A]' : 'text-white/40 hover:text-white'
                  } ${
                    isSidebar ? 'h-14 px-5 w-full' : 'h-10 px-6'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 z-0 rounded-[20px]"
                    transition={springConfig}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-desktop"
                        className="absolute inset-0 bg-white/[0.08] rounded-[20px] shadow-[inset_0_0_20px_rgba(212,157,58,0.05)] border border-white/5"
                        transition={springConfig}
                      />
                    )}
                  </motion.div>
                  
                  <motion.span 
                    layout="position" 
                    className={`text-lg z-10 flex items-center justify-center w-6 h-6 flex-shrink-0 ${isActive ? 'drop-shadow-[0_0_8px_rgba(212,157,58,0.4)]' : ''}`}
                  >
                    {item.icon}
                  </motion.span>
                  
                  <AnimatePresence mode="popLayout">
                    {(isSidebar || isActive) && (
                      <motion.span
                        layout="position"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3 font-bold text-sm tracking-tight z-10 whitespace-nowrap"
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

export default AdaptiveNav;
