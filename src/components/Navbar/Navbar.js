// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      setIsScrolled(window.scrollY > 50); // Shrink threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar${isScrolled ? ' shrink' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleCloseMenu}>
          Immortal Duo
        </Link>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger${isMenuOpen ? ' open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Nav Links */}
        <ul
          id="primary-navigation"
          className={`nav-links${isMenuOpen ? ' open' : ''}`}
          onClick={handleCloseMenu}
        >
          <li><Link to="/mixtapes">Mixtapes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/media">Media</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
