import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Calendar, Music, ArrowRight, Play, ExternalLink, ChevronDown, Mail, Image } from 'lucide-react';
import './Home.css';

import BoyzaImg from '../../assets/Boyza.png';
import SgatliImg from '../../assets/Sgatli.png';
import RecentPoster from '../../assets/recent poster.jpg';

export default function Home() {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
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

  // Intersection observers for scroll animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [djsRef, djsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="home-page">
      {/* Hero Image Introduction - with proper border and styling */}
      <div className="hero-intro-container">
        <motion.div 
          className="hero-intro-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img 
            src={process.env.PUBLIC_URL + '/hero_section.png'} 
            alt="Immortal Duo Introduction" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </motion.div>
      </div>
      
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="hero-content">
          <motion.h1 
            className="glitch-text" 
            data-text="IMMORTAL DUO"
            variants={childVariants}
          >
            IMMORTAL DUO
          </motion.h1>
          
          <motion.p 
            className="hero-tagline"
            variants={childVariants}
          >
            Redefining the sound of tomorrow, today.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            variants={childVariants}
          >
            <Link to="/mixtapes" className="cyber-button gradient">
              <Headphones size={18} />
              <span>Listen Now</span>
            </Link>
            
            <Link to="/events" className="cyber-button">
              <Calendar size={18} />
              <span>Upcoming Events</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="hero-scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            variants={childVariants}
          >
            <span>Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </div>
        
        <div className="hero-backdrop"></div>
      </motion.section>

      {/* Featured Section */}
      <motion.section 
        className="featured-section section"
        ref={featuredRef}
        initial="hidden"
        animate={featuredInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 variants={childVariants}>Latest Release</motion.h2>
          
          <motion.div 
            className="featured-content"
            variants={childVariants}
          >
            <div className="featured-image">
              <img src={RecentPoster} alt="Latest Mixtape Cover" />
              <div className="play-overlay">
                <Play size={48} />
              </div>
            </div>
            
            <div className="featured-info">
              <h3 className="gradient-text">The Quarandeep Radio Show</h3>
              <p>Our latest mixtape takes you on a journey through pulsating beats and hypnotic rhythms. Featuring collaborations with the industry's finest talents. Dont forget stricly exclusives!</p>
              
              <div className="featured-meta">
                <span><Music size={16} /> 16 Tracks</span>
                <span>Released: June 11, 2025</span>
              </div>
              
              <div className="featured-cta">
                <Link to="/mixtapes" className="cyber-button purple">
                  <span>Full Mixtape</span>
                  <ArrowRight size={16} />
                </Link>
                
                <a href="https://hearthis.at/the-immortal-duo/" target="_blank" rel="noopener noreferrer" className="cyber-button">
                  <span>HearThis.at</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* DJs Section */}
      <motion.section 
        className="djs-section section"
        ref={djsRef}
        initial="hidden"
        animate={djsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 variants={childVariants}>Meet The Duo</motion.h2>
          
          <motion.div 
            className="djs-grid"
            variants={childVariants}
          >
            <div className="dj-card cyber-card">
              <div className="dj-image">
                <img src={BoyzaImg} alt="DJ Boyza" />
              </div>
              <div className="dj-info">
                <h3>DJ Boyza</h3>
                <p>The beat maestro with an ear for rhythm that moves the crowd. Specializing in soulful and house music that transcends time.</p>
                <Link to="/about" className="text-glow-blue">Read More</Link>
              </div>
            </div>
            
            <div className="dj-card cyber-card">
              <div className="dj-image">
                <img src={SgatliImg} alt="DJ Sgatli" />
              </div>
              <div className="dj-info">
                <h3>DJ Sgatli</h3>
                <p>The mix wizard who blends genres with precision and creativity. Known for transitions that tell a story on every set.</p>
                <Link to="/about" className="text-glow-blue">Read More</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section 
        className="events-section section"
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 variants={childVariants}>Upcoming Events</motion.h2>
          
          <motion.div 
            className="events-grid"
            variants={childVariants}
          >
            <div className="event-card cyber-card">
              <div className="event-date">
                <span className="event-day">15</span>
                <span className="event-month">JUL</span>
              </div>
              <div className="event-details">
                <h3>Neon Dreams Festival</h3>
                <p className="event-location">Cosmic Arena, Johannesburg</p>
                <p className="event-time">21:00 - 02:00</p>
                <button className="cyber-button pink">Get Tickets</button>
              </div>
            </div>
            
            <div className="event-card cyber-card">
              <div className="event-date">
                <span className="event-day">28</span>
                <span className="event-month">JUL</span>
              </div>
              <div className="event-details">
                <h3>Summer Sunset Sessions</h3>
                <p className="event-location">Beach Club, Cape Town</p>
                <p className="event-time">16:00 - 22:00</p>
                <button className="cyber-button pink">Get Tickets</button>
              </div>
            </div>
            
            <div className="event-card cyber-card">
              <div className="event-date">
                <span className="event-day">10</span>
                <span className="event-month">AUG</span>
              </div>
              <div className="event-details">
                <h3>Club Cybernaut</h3>
                <p className="event-location">Digital Lounge, Pretoria</p>
                <p className="event-time">22:00 - 04:00</p>
                <button className="cyber-button pink">Get Tickets</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="events-cta"
            variants={childVariants}
          >
            <Link to="/events" className="cyber-button gradient">
              <span>View All Events</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="newsletter-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Subscribe to our newsletter for exclusive updates, upcoming events, and special announcements.</p>
            
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="cyber-button purple">Subscribe</button>
            </form>
          </div>
        </div>
      </motion.section>
      
      {/* Quick Links */}
      <motion.section 
        className="quick-links-section section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container">
          <motion.h2 variants={childVariants}>Explore More</motion.h2>
          
          <motion.div 
            className="quick-links-grid"
            variants={childVariants}
          >
            <Link to="/mixtapes" className="quick-link-card cyber-card">
              <Music size={32} />
              <span>Mixtapes</span>
            </Link>
            
            <Link to="/media" className="quick-link-card cyber-card">
              <Image size={32} />
              <span>Media</span>
            </Link>
            
            <Link to="/contact" className="quick-link-card cyber-card">
              <Mail size={32} />
              <span>Contact</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
