import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', variant = 'default' }) => {
  return (
    <div className={`loading-spinner ${size}`}>
      {variant === 'music' ? (
        <div className="music-loader">
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
