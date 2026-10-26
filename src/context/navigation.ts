import { createContext, useContext } from 'react';

interface NavigationContextType {
  isSidebar: boolean;
  setIsSidebar: (value: boolean) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
