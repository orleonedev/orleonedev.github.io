import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    goatcounter?: { count: (vars: { path: string }) => void };
  }
}

const count = (path: string) => {
  if (window.goatcounter?.count) {
    window.goatcounter.count({ path });
    return;
  }
  // count.js loads async — catch the first pageview once it's ready.
  document
    .querySelector('script[data-goatcounter]')
    ?.addEventListener('load', () => window.goatcounter?.count({ path }), { once: true });
};

/**
 * Sends a GoatCounter pageview on every client-side route change (the script tag in
 * index.html has `no_onload`, since a SPA only loads once). Cookie-free; localhost is ignored.
 */
export const usePageviews = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    count(pathname);
  }, [pathname]);
};
