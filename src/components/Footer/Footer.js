import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Immortal Duo</h3>
          <p>
            Bookings: <a href="mailto:bookings@khutsotakalo1@gmail.com">bookings@katlegokekana442@gmail.com</a>
          </p>
          <p>Phone: +27 71 204 8992 / 76 485 8322</p>
        </div>

        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://web.facebook.com/profile.php?id=100082587348379"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/theimmortalduo/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@theimmortal_duo1"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Immortal Duo. All rights reserved.</p>
      </div>
    </footer>
  );
}
