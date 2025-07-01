import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page container">
      {/* Hero */}
      <section className="hero">
        <h1>Immortal Duo</h1>
        <p className="tagline">Feel the wave of eternal sound.</p>
        <div className="hero-buttons">
          <Link to="/mixtapes" className="btn">🎧 Listen</Link>
          <Link to="/contact" className="btn">📩 Book Us</Link>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <h2>Who We Are</h2>
        <p>
          Immortal Duo is a South African DJ pair blending deep house and soulful vibes
          into exclusive mixtapes. From late-night grooves to festival-ready sets,
          Boyza Rsa and Sgatli bring timeless sound with a modern soul.
        </p>
      </section>

      {/* Featured Mix */}
      <section className="featured-mix">
        <h2>🔥 Latest Drop</h2>
        <div className="mix-embed">
  <iframe
    title="Immortal Duo - YouTube Mix"
    width="100%"
    height="360"
    src="https://www.youtube.com/embed/Xcr5TagrPto"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

      </section>

      {/* Meet the DJs */}
      <section className="duo-members">
        <h2>Meet the Duo</h2>
        <div className="members-grid">
          <div className="member-card">
            <img src="/assets/boyza.jpg" alt="Boyza Rsa" />
            <h3>Boyza Rsa</h3>
            <p>Deep cuts, smooth blends, and soulful moods.</p>
          </div>
          <div className="member-card">
            <img src="/assets/sgatli.jpg" alt="Sgatli" />
            <h3>Sgatli</h3>
            <p>Energy, precision, and rhythm that moves crowds.</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <h2>Explore More</h2>
        <div className="links">
          <Link to="/mixtapes" className="btn link-btn">🎵 Mixtapes</Link>
          <Link to="/media" className="btn link-btn">📸 Media</Link>
          <Link to="/contact" className="btn link-btn">📬 Contact</Link>
        </div>
      </section>
    </div>
  );
}
