import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import AppLayout from './components/layout/AppLayout';
import AboutTab from './pages/v2/AboutTab';
import InsightsTab from './pages/v2/InsightsTab';
import ConnectTab from './pages/v2/ConnectTab';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './hooks/ScrollToTop';

// Showcase (`/showcase`, `/project/:projectId`) is parked until there is work worth
// presenting as case studies — see docs/showcase-study.md.

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<AboutTab />} />
            <Route path="/insights" element={<InsightsTab />} />
            <Route path="/connect" element={<ConnectTab />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;
