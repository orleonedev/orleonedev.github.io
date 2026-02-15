import React, { useState, useEffect } from 'react';
import { FaWifi, FaBatteryFull, FaBatteryThreeQuarters, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from 'react-icons/fa';

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => setTime(new Date()), 60000);

    // Battery API
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
      });
    }

    // Network Status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(timer);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getBatteryIcon = () => {
    if (batteryLevel === null) return <FaBatteryFull />;
    if (batteryLevel > 80) return <FaBatteryFull />;
    if (batteryLevel > 60) return <FaBatteryThreeQuarters />;
    if (batteryLevel > 40) return <FaBatteryHalf />;
    if (batteryLevel > 20) return <FaBatteryQuarter />;
    return <FaBatteryEmpty className="text-red-500" />;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <div className="fixed top-0 w-full z-[100] h-12 flex items-center px-6 bg-black/20 backdrop-blur-md border-b border-white/5 text-[16px] font-semibold text-white/90 select-none pointer-events-none">
      {/* Desktop Left: Time & Date */}
      <div className="hidden md:flex flex-1 items-center gap-5">
        <span>{formatTime(time)}</span>
        <span className="opacity-40">{formatDate(time)}</span>
      </div>

      {/* Center: Brand (Always visible) */}
      <div className="flex-1 flex justify-center">
        <span className="tracking-tight">
          orleone<span className="text-[#D49D3A]">.dev</span>
        </span>
      </div>

      {/* Desktop Right: Status Indicators */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-3">
        <div className="flex items-center gap-1">
          <FaWifi className={isOnline ? 'text-white' : 'text-white/30'} />
          <span className="sr-only">{isOnline ? 'Online' : 'Offline'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>{batteryLevel !== null ? `${batteryLevel}%` : ''}</span>
          {getBatteryIcon()}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
