import React from 'react';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Events.css';

export default function Events() {
  return (
    <div className="events-page container">
      <div className="events-header">
        <h1>Events & Performances</h1>
        <p>Join us for an unforgettable musical journey at our live events</p>
      </div>

      <EventCalendar />

      <section className="event-info">
        <div className="info-grid">
          <div className="info-card">
            <h3>Live Performances</h3>
            <p>Experience the energy of Immortal Duo live at clubs, festivals, and special events. Our performances blend cutting-edge electronic music with interactive crowd engagement.</p>
          </div>
          <div className="info-card">
            <h3>Private Events</h3>
            <p>Book us for your private parties, corporate events, or special celebrations. We create custom setlists tailored to your audience and occasion.</p>
          </div>
          <div className="info-card">
            <h3>DJ Workshops</h3>
            <p>Learn the art of DJing from the pros. We offer workshops and masterclasses for aspiring DJs and electronic music enthusiasts.</p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
