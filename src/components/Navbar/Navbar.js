// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Headphones, Image, Mail, Home, Info, Calendar } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Close menu when link is clicked
  const handleCloseMenu = () => setIsMenuOpen(false);

  // Scroll listener for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        ease: 'easeInOut',
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav
      className={`navbar${isScrolled ? ' shrink' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="logo" onClick={handleCloseMenu}>
            <span className="logo-text">Immortal</span>
            <span className="logo-highlight">Duo</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul className="nav-links" variants={navVariants}>
          <motion.li variants={itemVariants}>
            <Link to="/" className="nav-link" onClick={handleCloseMenu}>
              <Home size={18} />
              <span>Home</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/about" className="nav-link" onClick={handleCloseMenu}>
              <Info size={18} />
              <span>About</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/mixtapes" className="nav-link" onClick={handleCloseMenu}>
              <Headphones size={18} />
              <span>Mixtapes</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/media" className="nav-link" onClick={handleCloseMenu}>
              <Image size={18} />
              <span>Media</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/events" className="nav-link" onClick={handleCloseMenu}>
              <Calendar size={18} />
              <span>Events</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/contact" className="nav-link" onClick={handleCloseMenu}>
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </motion.li>
        </motion.ul>

        {/* Hamburger Menu Button */}
        <motion.button
          className="menu-toggle"
          onClick={toggleMenu}
          variants={itemVariants}
          whileTap={{ scale: 0.9 }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="mobile-menu-content">
                <ul className="mobile-nav-links">
                  <motion.li variants={itemVariants}>
                    <Link to="/" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Home size={20} />
                      <span>Home</span>
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/about" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Info size={20} />
                      <span>About</span>
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/mixtapes" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Headphones size={20} />
                      <span>Mixtapes</span>
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/media" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Image size={20} />
                      <span>Media</span>
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/events" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Calendar size={20} />
                      <span>Events</span>
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/contact" className="mobile-nav-link" onClick={handleCloseMenu}>
                      <Mail size={20} />
                      <span>Contact</span>
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
