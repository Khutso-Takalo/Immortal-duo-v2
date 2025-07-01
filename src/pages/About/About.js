import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page container" role="main">
      <h1>About Immortal Duo</h1>
      <p>
        Immortal Duo is a dynamic DJ and producer pair known for electrifying performances and
        a unique blend of electronic beats and timeless rhythms. Since 2015, they’ve rocked clubs
        and festivals across South Africa, captivating crowds with their passion and sound innovation.
      </p>

      <section className="about-highlights" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">📌 Highlights</h2>
        <ul>
          <li>Performed at Sunset Festival 2024</li>
          <li>Released 3 studio albums and 5 mixtapes</li>
          <li>Featured in DJ Mag South Africa</li>
          <li>Collaborated with top artists across genres</li>
        </ul>
      </section>

      <section className="about-vision" aria-labelledby="vision-heading">
        <h2 id="vision-heading">Our Vision</h2>
        <p>
          To push the boundaries of electronic music and create unforgettable experiences
          that connect people through the power of sound.
        </p>
      </section>
    </div>
  );
}
