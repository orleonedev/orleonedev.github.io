import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import AppLayout from './components/layout/AppLayout';
import AboutTab from './pages/v2/AboutTab';
import ShowcaseTab from './pages/v2/ShowcaseTab';
import InsightsTab from './pages/v2/InsightsTab';
import ConnectTab from './pages/v2/ConnectTab';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<AboutTab />} />
            <Route path="/showcase" element={<ShowcaseTab />} />
            <Route path="/insights" element={<InsightsTab />} />
            <Route path="/connect" element={<ConnectTab />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;
