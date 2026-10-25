import React from 'react';
import { Outlet } from 'react-router-dom';
import StatusBar from '../StatusBar';
import AdaptiveNav from '../navigation/AdaptiveNav';
import AuroraBackground from '../ui/AuroraBackground';
import { useNavigation } from '../../context/navigation';

const AppLayout: React.FC = () => {
  const { isSidebar } = useNavigation();

  return (
    <div className="min-h-dvh text-white font-sans overflow-x-hidden">
      <AuroraBackground />
      <StatusBar />
      <AdaptiveNav />

      <main
        className={`transition-[padding] duration-700 ease-ios pt-24 md:pt-36 px-4 sm:px-6 md:pr-12 lg:pr-16 ${
          isSidebar ? 'md:pl-80' : 'md:pl-12 lg:pl-16'
        }`}
      >
        <div className="max-w-6xl mx-auto pb-40 md:pb-24">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
