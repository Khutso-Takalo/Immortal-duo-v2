import React from 'react';
import './Mixtapes.css';

const mixtapes = [
  {
    id: 1,
    title: 'Eternal Wave Mix',
    description: 'A 1-hour set blending chill beats and energetic drops.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/your-dj-profile/eternal-wave-mix',
  },
  {
    id: 2,
    title: 'Night Vibes EP',
    description: 'Our latest EP with dark, moody club tracks.',
    embedUrl: 'https://open.spotify.com/embed/album/yourSpotifyAlbumID',
  },
  {
    id: 3,
    title: 'Sunset Festival Live',
    description: 'Live recording from the 2025 Sunset Festival.',
    embedUrl: 'https://www.youtube.com/embed/yourYouTubeVideoID',
  },
];

export default function Mixtapes() {
  return (
    <div className="mixtapes-page container">
      <h1>Mixtapes</h1>
      <p>Timeless blends, festival memories, and fresh drops — all in one place.</p>

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
                height="166"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
