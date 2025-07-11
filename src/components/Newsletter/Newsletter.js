import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Music, Calendar, Gift } from 'lucide-react';
import Analytics from '../../utils/analytics';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Track newsletter signup
      Analytics.sendEvent('newsletter_signup', {
        email: email
      });

      // Simulate API call - replace with real newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail size={32} />
          </div>
          <h3>Stay in the Loop</h3>
          <p>Get notified about our latest mixtapes, upcoming events, and exclusive content.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="newsletter-input"
              disabled={isSubmitting}
              required
            />
            <button 
              type="submit" 
              className="newsletter-btn"
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'success' && (
            <div className="status-message success">
              <CheckCircle size={16} />
              <span>Thanks for subscribing! Check your email for confirmation.</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              <AlertCircle size={16} />
              <span>Please enter a valid email address.</span>
            </div>
          )}
        </form>
        
        <div className="newsletter-features">
          <div className="feature">
            <span className="feature-icon"><Music size={16} /></span>
            <span>New Track Alerts</span>
          </div>
          <div className="feature">
            <span className="feature-icon"><Calendar size={16} /></span>
            <span>Event Notifications</span>
          </div>
          <div className="feature">
            <span className="feature-icon"><Gift size={16} /></span>
            <span>Exclusive Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
