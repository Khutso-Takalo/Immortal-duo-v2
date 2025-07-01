import React, { useState } from 'react';
import './Media.css';
import BoyzaImg from '../../assets/Boyza.png';
import DuoImg from '../../assets/Immorta_duo.jpg';
import PosterImg from '../../assets/recent poster.jpg';
import SgatliImg from '../../assets/Sgatli.png';

const photoGallery = [BoyzaImg, DuoImg, PosterImg, SgatliImg];

const videoGallery = [
  {
    id: 1,
    title: 'Sunset Festival Live Set',
    url: 'https://www.youtube.com/embed/Xcr5TagrPto',
  },
  {
    id: 2,
    title: 'Studio Session Highlights',
    url: 'https://www.youtube.com/embed/QUfN4Ev5Sis',
  },
];

export default function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="media-page container">
      <h1>{/*Media*/}</h1>

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
              className="photo-thumbnail"
              onClick={() => openLightbox(src)}
              aria-label={`View photo ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Enlarged view" className="lightbox-img" />
        </div>
      )}

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
