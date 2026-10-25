import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiWifi, FiWifiOff } from 'react-icons/fi';

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

const formatDate = (date: Date) =>
  date.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });

/** iPadOS-style status bar: clock on the left, brand in the centre, connectivity on the right. */
const StatusBar: React.FC = () => {
  const [time, setTime] = useState(() => new Date());
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30_000);
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

  return (
    <header className="fixed top-0 inset-x-0 z-[100] h-11 pt-[env(safe-area-inset-top)] flex items-center px-6 text-[15px] font-semibold text-white/90 select-none bg-gradient-to-b from-ink/70 to-transparent">
      <div className="hidden md:flex flex-1 items-center gap-3 tabular-nums">
        <span>{formatTime(time)}</span>
        <span className="text-white/60">{formatDate(time)}</span>
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/" className="tracking-tight">
          orleone<span className="text-accent">.dev</span>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center gap-2 text-white/80" aria-hidden>
        {isOnline ? <FiWifi /> : <FiWifiOff className="text-white/40" />}
      </div>
    </header>
  );
};

export default StatusBar;
