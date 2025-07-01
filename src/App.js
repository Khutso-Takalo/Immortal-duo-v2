import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mixtapes from './pages/Mixtapes/Mixtapes';
import Media from './pages/Media/Media';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  // Use PUBLIC_URL from environment or fallback to '/'
  const basename = process.env.PUBLIC_URL || '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mixtapes" element={<Mixtapes />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
