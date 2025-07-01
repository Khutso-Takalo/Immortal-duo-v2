import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-tagline">Let's connect — bookings, events, or just to vibe.</p>

        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:bookings@immortalduo.com">bookings@immortalduo.com</a></p>
          <p><strong>Phone:</strong> +27 71 204 8992 / 76 485 8322</p>
        </div>

        <div className="contact-socials">
          <p>Follow us on:</p>
          <a href="https://instagram.com/theimmortalduo" target="_blank" rel="noreferrer">Instagram</a> | 
          <a href="https://facebook.com/theimmortalduo" target="_blank" rel="noreferrer">Facebook</a> | 
          <a href="https://tiktok.com/@theimmortalduo_1" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </div>
  );
}
