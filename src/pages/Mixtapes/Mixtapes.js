import React from 'react';
import './Mixtapes.css';

const mixtapes = [
  {
    id: 1,
    title: 'Guest Mix',
    description: 'The Quaranadeep Radio Show With Da Master Session 031',
    embedUrl: 'https://www.youtube.com/embed/Xcr5TagrPto?list=PLSZQZuYcTdMogy5-9BzXGSzC0Y6V_qhOe',
  },
  {
    id: 2,
    title: 'Main Production mix',
    description: 'Immortal Duo Episode 16',
    embedUrl: 'https://www.youtube.com/embed/9jm6aGWaO18?list=PLSZQZuYcTdMogy5-9BzXGSzC0Y6V_qhOe',
  },
  {
    id: 3,
    title: 'Guest Mix',
    description: 'Fusion sounds 019 (Guest Mix by The Immortal Duo)',
    embedUrl: 'https://www.youtube.com/embed/QUfN4Ev5Sis?list=PLSZQZuYcTdMogy5-9BzXGSzC0Y6V_qhOe',
  },
  {
    id: 4,
    title: 'Main Production mix',
    description: 'Immortal Duo epsiode 15(Sgatlis Birthday Mix)',
    embedUrl: 'https://www.youtube.com/embed/kq0nY_bKAtA?list=PLSZQZuYcTdMogy5-9BzXGSzC0Y6V_qhOe',
  },
  {
    id: 5,
    title: 'Main Production mix',
    description: 'Immortal Duo Episode 14',
    embedUrl: 'https://www.youtube.com/embed/ujx3rrKZptA?list=PLSZQZuYcTdMogy5-9BzXGSzC0Y6V_qhOe',
  },
  {
    id: 6,
    title: 'Live Set',
    description: '#Gang_Friday with lapie & Immortal Duo',
    embedUrl: 'https://www.youtube.com/embed/BEN5NaOG0BE',
  },
];

export default function Mixtapes() {
  return (
    <div className="mixtapes-page container">
      <h1>Mixtapes</h1>
      <p>Timeless blends, festival memories, and fresh drops — all in one place.</p>

      {/* Podomatic Podcast Section */}
      <div className="podcast-section">
        <h2>Listen on Podomatic</h2>
        <div className="podcast-embed">
          <iframe 
            src="https://podomatic.com/embed/html5/podcast/6388101" 
            height="208" 
            width="100%" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            scrolling="no" 
            allowFullScreen
            title="Immortal Duo Podcast"
          />
        </div>
        <div className="podcast-links">
          <a 
            href="https://www.podomatic.com/podcasts/katlegokekana442" 
            target="_blank" 
            rel="noopener noreferrer"
            className="podcast-link"
          >
            Listen on Podomatic
          </a>
          <a 
            href="https://podcasts.apple.com/us/podcast/the-immortal-duo/id1788681138" 
            target="_blank" 
            rel="noopener noreferrer"
            className="podcast-link apple"
          >
            Listen on Apple Podcasts
          </a>
          <a 
            href="https://hearthis.at/the-immortal-duo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="podcast-link hearthis"
          >
            Listen on HearThis.at
          </a>
          <a 
            href="https://www.youtube.com/@Thee_immortalduo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="podcast-link youtube"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      <div className="mixtape-list">
        {mixtapes.map(({ id, title, description, embedUrl }) => (
          <div key={id} className="mixtape-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="player-wrapper">
              <iframe
                title={title}
                src={embedUrl}
                width="100%"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
