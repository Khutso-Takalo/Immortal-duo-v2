import React from 'react';
import './Media.css';

const photoGallery = [
  '/media/photo1.jpg',
  '/media/photo2.jpg',
  '/media/photo3.jpg',
  '/media/photo4.jpg',
  '/media/photo5.jpg',
  '/media/photo6.jpg',
];

const videoGallery = [
  {
    id: 1,
    title: 'Sunset Festival Live Set',
    url: 'https://www.youtube.com/embed/yourYouTubeVideoID1',
  },
  {
    id: 2,
    title: 'Studio Session Highlights',
    url: 'https://www.youtube.com/embed/yourYouTubeVideoID2',
  },
];

export default function Media() {
  return (
    <div className="media-page container">
      <h1>Media</h1>

      {/* PHOTOS */}
      <section className="media-photos">
        <h2>Photos</h2>
        <div className="photos-grid">
          {photoGallery.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Immortal Duo Photo ${idx + 1}`}
              loading="lazy"
              tabIndex="0"
              aria-label={`View photo ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="media-videos">
        <h2>Videos</h2>
        <div className="videos-list">
          {videoGallery.map(({ id, title, url }) => (
            <div key={id} className="video-wrapper">
              <h3>{title}</h3>
              <iframe
                title={title}
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
