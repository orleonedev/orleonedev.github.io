import React from 'react';
import { Outlet } from 'react-router-dom';
import StatusBar from '../StatusBar';
import AdaptiveNav from '../navigation/AdaptiveNav';
import { useNavigation } from '../../context/NavigationContext';

const AppLayout: React.FC = () => {
  const { isSidebar } = useNavigation();

  return (
    <div className="bg-[#0D1117] min-h-screen text-white font-ios selection:bg-[#D49D3A]/30 overflow-x-hidden">
      <StatusBar />
      
      <AdaptiveNav />
      
      <main 
        className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pt-28 pr-6 md:pr-12 lg:pr-16 ${
          isSidebar 
            ? 'pl-6 md:pl-80' 
            : 'pl-6 md:pl-12 lg:pr-16'
        }`}
      >
        <div className="max-w-[1600px] mx-auto pb-32">
          <Outlet />
        </div>
      </main>
      
      {/* Dynamic Mesh Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D49D3A]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-[#D49D3A]/3 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default AppLayout;
