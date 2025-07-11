import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Analytics from './utils/analytics';

// Import cyberpunk styling
import './styles/cyberpunk.css';
import './App.css';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Mixtapes = React.lazy(() => import('./pages/Mixtapes/Mixtapes'));
const Media = React.lazy(() => import('./pages/Media/Media'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Events = React.lazy(() => import('./pages/Events/Events'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

// Analytics component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    Analytics.sendPageview(location.pathname + location.search);
  }, [location]);

  return null;
}

// AnimatedRoutes component for page transitions
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mixtapes" element={<Mixtapes />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Initialize analytics
    Analytics.initialize();
    
    // Add cyberpunk grid effect to body
    document.body.classList.add('cyberpunk-background');
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<LoadingSpinner variant="music" text="Loading beats..." />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
