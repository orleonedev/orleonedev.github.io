import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { NavigationContext } from './navigation';

const STORAGE_KEY = 'nav-sidebar';

const readStoredSidebar = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebar, setIsSidebarState] = useState(readStoredSidebar);

  const setIsSidebar = (value: boolean) => {
    setIsSidebarState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? '1' : '0');
    } catch {
      // Storage unavailable (private mode) — the preference just won't persist.
    }
  };

  return (
    <NavigationContext.Provider value={{ isSidebar, setIsSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};
