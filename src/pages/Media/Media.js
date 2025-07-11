import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image, Film, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Intersection observers
  const [photosRef, photosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [videosRef, videosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Lightbox functions
  const openLightbox = (src, index) => {
    setCurrentImage(src);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + photoGallery.length) % photoGallery.length;
    setCurrentIndex(newIndex);
    setCurrentImage(photoGallery[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % photoGallery.length;
    setCurrentIndex(newIndex);
    setCurrentImage(photoGallery[newIndex]);
  };

  return (
    <div className="media-page">
      <div className="container">
        <motion.h1 
          className="glitch-text"
          data-text="MEDIA GALLERY"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MEDIA GALLERY
        </motion.h1>

        {/* PHOTOS SECTION */}
        <motion.section 
          className="photos-section section"
          ref={photosRef}
          initial="hidden"
          animate={photosInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2><Image size={24} /> Photography</h2>
            <div className="section-line"></div>
          </motion.div>
          
          <motion.div className="photos-grid" variants={containerVariants}>
            {photoGallery.map((src, idx) => (
              <motion.div 
                key={idx}
                className="photo-card cyber-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px var(--neon-blue)',
                }}
                onClick={() => openLightbox(src, idx)}
              >
                <div className="photo-overlay">
                  <span>View</span>
                </div>
                <img
                  src={src}
                  alt={`Immortal Duo ${idx + 1}`}
                  loading="lazy"
                  className="photo-img"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* VIDEOS SECTION */}
        <motion.section 
          className="videos-section section"
          ref={videosRef}
          initial="hidden"
          animate={videosInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2><Film size={24} /> Video Content</h2>
            <div className="section-line"></div>
          </motion.div>
          
          <motion.div className="videos-grid" variants={containerVariants}>
            {videoGallery.map(({ id, title, url }) => (
              <motion.div 
                key={id} 
                className="video-card cyber-card"
                variants={itemVariants}
              >
                <h3>{title}</h3>
                <div className="video-wrapper">
                  <iframe
                    title={title}
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <motion.div 
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          <button className="lightbox-nav prev" onClick={goToPrevious}>
            <ChevronLeft size={36} />
          </button>
          
          <motion.img 
            src={currentImage} 
            alt="Enlarged view" 
            className="lightbox-img"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          />
          
          <button className="lightbox-nav next" onClick={goToNext}>
            <ChevronRight size={36} />
          </button>
          
          <div className="lightbox-counter">
            {currentIndex + 1} / {photoGallery.length}
          </div>
        </motion.div>
      )}
    </div>
  );
}
