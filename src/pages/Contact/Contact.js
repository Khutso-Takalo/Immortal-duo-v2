import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../../config/email';
import { Mail, Phone, MapPin, Instagram, Facebook, Music } from 'lucide-react';
import Analytics from '../../utils/analytics';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    eventType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      eventType: 'general'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateData = {
      from_name: formData.name,
      from_email: formData.email,
      event_type: formData.eventType,
      message: formData.message,
      // Remove to_email - we'll set it directly in EmailJS template
    };

    try {
      // Send to Admin
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ADMIN,
        templateData
      );

      setSubmitted(true);
      resetForm();
      Analytics.trackContactFormSubmit(formData.eventType);
    } catch (err) {
      console.error('❌ EmailJS Error:', err);
      console.error('❌ Full error details:', err.text || err.message);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-tagline">Let's connect — bookings, events, or just to vibe.</p>

        <div className="contact-grid">
          {/* LEFT: Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <strong><Mail size={16} /> Email:</strong> 
                <a href="mailto:khutsotakalo1@gmail.com">khutsotakalo1@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong><Phone size={16} /> Phone:</strong> 
                <a href="tel:+27712048992">+27 71 204 8992</a> / 
                <a href="tel:+27764858322">76 485 8322</a>
              </div>
              <div className="contact-item">
                <strong><MapPin size={16} /> Location:</strong> 
                <span>South Africa</span>
              </div>
            </div>

            <div className="contact-socials">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/theimmortalduo/" target="_blank" rel="noreferrer" onClick={() => Analytics.trackSocialClick('Instagram')}>
                  <Instagram size={18} /> Instagram
                </a>
                <a href="https://web.facebook.com/profile.php?id=100082587348379" target="_blank" rel="noreferrer" onClick={() => Analytics.trackSocialClick('Facebook')}>
                  <Facebook size={18} /> Facebook
                </a>
                <a href="https://www.tiktok.com/@theimmortal_duo1" target="_blank" rel="noreferrer" onClick={() => Analytics.trackSocialClick('TikTok')}>
                  <Music size={18} /> TikTok
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitted ? (
              <div className="success-message">
                <h3>✨ Thank you!</h3>
                <p>We've received your message and will get back to you soon!</p>
                <button onClick={() => setSubmitted(false)} className="btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && <div className="error-message"><p>{error}</p></div>}

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival/Concert</option>
                    <option value="club">Club Night</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Tell us about your event, preferred dates, venue, and any special requirements..."
                  />
                </div>

                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

