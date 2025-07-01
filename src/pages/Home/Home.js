import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import BoyzaImg from '../../assets/Boyza.png';
import SgatliImg from '../../assets/Sgatli.png';

export default function Home() {
  const djCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    djCardsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page container">
      {/* Hero Section */}
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

          {/* HearThis Player Section */}
      <section className="hearthis-embed-section">
        <h2>Tune into Soulful House Music</h2>
        <div
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            maxWidth: '640px',
            margin: '1rem auto',
          }}
        >
          <iframe
            scrolling="no"
            style={{ borderRadius: '10px' }}
            id="hearthis_at_track_11794039"
            width="100%"
            height="150"
            src="https://app.hearthis.at/embed/11794039/transparent_black/?hcolor=&color=&style=2&block_size=1&block_space=0&background=1&waveform=0&cover=0&autoplay=0&css="
            frameBorder="0"
            allowTransparency
            allow="autoplay"
            title="Immortal Duo HearThis Player"
          >
            <p>
              Listen to{' '}
              <a
                href="https://hearthis.at/the-immortal-duo/fusion-sounds-019-guest-mix-by-the-immortal-duo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FUSION SOUNDS 019 (GUEST MIX BY THE IMMORTAL DUO)
              </a>{' '}
              <span>by</span>{' '}
              <a
                href="https://hearthis.at/the-immortal-duo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE IMMORTAL DUO
              </a>{' '}
              <span>on</span>{' '}
              <a href="https://hearthis.at/" target="_blank" rel="noopener noreferrer">
                hearthis.at
              </a>
            </p>
          </iframe>
        </div>
      </section>

      {/* Meet the DJs */}
      <section className="meet-djs">
        <h2>Meet the Duo</h2>
        <div className="dj-cards">
          <div
            className="dj-card"
            ref={el => (djCardsRef.current[0] = el)}
          >
            <img src={BoyzaImg} alt="Boyza Rsa" />
            <h3>Boyza Rsa</h3>
            <p>
              The heartbeat of deep house — Boyza fuses old-school rhythms with
              new-age soul. Known for unforgettable late-night sets.
            </p>
          </div>

          <div
            className="dj-card"
            ref={el => (djCardsRef.current[1] = el)}
          >
            <img src={SgatliImg} alt="Sgatli" />
            <h3>Sgatli</h3>
            <p>
              Master of melodic blends — Sgatli brings warm vibes, lush chords,
              and floor-filling groove. A sound engineer with a crowd-first mindset.
            </p>
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
