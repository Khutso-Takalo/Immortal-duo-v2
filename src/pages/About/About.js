import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page container" role="main">
      <h1>About Immortal Duo</h1>
      <p>
        The Immortal Duo is more than just a DJs they're two lifelong friends from Zebediela, Limpopo,
        united by a shared passion for music and a deep love for soulful and deep house.
        Blending their distinct musical tastes, they’ve created a signature sound that 
        resonates with the streets and heals the soul. Since their formation in 2020, 
        Immortal Duo has earned a reputation for curating unforgettable sets that bring out the best in people,
        turning every performance into a powerful, emotional experience. Their mission is simple to feed the 
        soul with exclusive, heartfelt music that moves bodies and minds alike.
      </p>

      <section className="about-highlights" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading"> Highlights</h2>
        <ul>
          <li>Performed at Polokwane Perere,Lephalale kwa tebza,Golden lifestyle </li>
          <li>Released several Birthday mixtapes and Episodic mixtapes</li>
          <li>Featured in DJ Lapie's live mixtape</li>
          <li>Collaborated with Thobela FM </li>
        </ul>
      </section>

      <section className="about-vision" aria-labelledby="vision-heading">
        <h2 id="vision-heading">Our Vision</h2>
        <p>
          To push the boundaries of deep and soulful music and create unforgettable experiences
          that connect people through the power of sound.
        </p>
      </section>
    </div>
  );
}
