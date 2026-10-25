import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GitHub Pages SPA fallback: public/404.html redirects deep links to `/?p=<path>`.
// Restore the original URL before the router reads it.
const redirectedPath = new URLSearchParams(window.location.search).get('p');
if (redirectedPath) {
  window.history.replaceState(null, '', redirectedPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
