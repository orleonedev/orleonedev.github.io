import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';

const NotFoundPage: React.FC = () => (
  <div className="min-h-[60dvh] flex items-center justify-center py-10">
    <GlassCard strong hover={false} className="p-10 md:p-14 text-center max-w-md">
      <p className="text-7xl md:text-8xl font-bold tracking-[-0.04em] text-gradient-accent mb-4">404</p>
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-white/70 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center h-12 px-6 rounded-full bg-accent text-ink font-semibold">
        Back to About
      </Link>
    </GlassCard>
  </div>
);

export default NotFoundPage;
