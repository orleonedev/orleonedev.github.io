import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FiUser, FiBookOpen, FiSend, FiSidebar, FiMinimize2 } from 'react-icons/fi';
import { useNavigation } from '../../context/navigation';
import { spring } from '../../lib/motion';

const navItems = [
  { title: 'About', to: '/', icon: <FiUser /> },
  { title: 'Insights', to: '/insights', icon: <FiBookOpen /> },
  { title: 'Connect', to: '/connect', icon: <FiSend /> },
];

const AdaptiveNav: React.FC = () => {
  const { isSidebar, setIsSidebar } = useNavigation();
  const location = useLocation();

  return (
    <LayoutGroup>
      {/* iPhone: floating bottom tab bar */}
      <nav
        aria-label="Primary"
        className="md:hidden fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      >
        <div className="glass-strong !rounded-[32px] flex items-center gap-1 p-1.5 w-full max-w-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.title}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className="relative flex-1 h-14 rounded-[26px]"
              >
                <motion.div
                  className="relative flex flex-col items-center justify-center gap-0.5 w-full h-full"
                  whileTap={{ scale: 0.92 }}
                  transition={spring}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-mobile"
                      className="glass-lens absolute inset-0 rounded-[26px]"
                      transition={spring}
                    />
                  )}
                  <span className={`relative text-[22px] ${isActive ? 'text-accent' : 'text-white/75'}`}>
                    {item.icon}
                  </span>
                  <span className={`relative text-[11px] font-semibold tracking-tight ${isActive ? 'text-accent' : 'text-white/75'}`}>
                    {item.title}
                  </span>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* iPad / desktop: floating top bar that morphs into a sidebar */}
      <motion.nav
        aria-label="Primary"
        layout
        transition={spring}
        className={`hidden md:flex fixed z-50 ${
          isSidebar ? 'left-6 top-20 bottom-6 w-64' : 'top-16 left-1/2 -translate-x-1/2 w-fit'
        }`}
      >
        <motion.div
          layout
          transition={spring}
          className={`glass-strong !rounded-[30px] w-full p-1.5 flex overflow-hidden ${
            isSidebar ? 'flex-col gap-1' : 'flex-row items-center gap-1'
          }`}
        >
          <motion.button
            layout="position"
            type="button"
            onClick={() => setIsSidebar(!isSidebar)}
            aria-label={isSidebar ? 'Collapse to top bar' : 'Expand to sidebar'}
            whileTap={{ scale: 0.9 }}
            className={`relative flex items-center justify-center rounded-[24px] text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ${
              isSidebar ? 'h-11 w-11 self-end mb-2' : 'h-11 w-11'
            }`}
          >
            {isSidebar ? <FiMinimize2 /> : <FiSidebar />}
          </motion.button>

          <motion.div layout="position" className={`flex ${isSidebar ? 'flex-col gap-1 w-full' : 'flex-row gap-1'}`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.title}
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center rounded-[24px] transition-colors flex-shrink-0 ${
                    isActive ? 'text-accent' : 'text-white/75 hover:text-white'
                  } ${isSidebar ? 'h-12 px-4 w-full' : 'h-11 px-5'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-desktop"
                      className="glass-lens absolute inset-0 rounded-[24px]"
                      transition={spring}
                    />
                  )}
                  <motion.span layout="position" className="relative text-lg flex items-center justify-center w-6 h-6">
                    {item.icon}
                  </motion.span>
                  <AnimatePresence mode="popLayout" initial={false}>
                    {(isSidebar || isActive) && (
                      <motion.span
                        layout="position"
                        initial={{ opacity: 0, x: -6, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -6, filter: 'blur(4px)' }}
                        transition={{ duration: 0.2 }}
                        className="relative ml-2.5 font-semibold text-[15px] tracking-tight whitespace-nowrap"
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
      </motion.nav>
    </LayoutGroup>
  );
};

export default AdaptiveNav;
