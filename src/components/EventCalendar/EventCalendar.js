import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import './EventCalendar.css';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  
  const sampleEvents = [
    {
      id: 1,
      title: 'Perere live stream',
      date: '2025-07-15',
      time: '20:00',
      location: 'polokwane',
      type: 'club',
      description: 'Join us for an unforgettable night of exclusive deep and soulful house music.',
      ticketUrl: '#',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Underground Sessions',
      date: '2025-07-22',
      time: '22:00',
      location: 'Andys Pub and Butchery',
      type: 'underground',
      description: 'Deep house and commercial deep in an intimate underground setting.',
      ticketUrl: '#',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Rooftop Sunset Session',
      date: '2025-08-05',
      time: '18:00',
      location: 'Black Moon',
      type: 'rooftop',
      description: 'Chill vibes and amazing sunset views with our signature sound.',
      ticketUrl: '#',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setEvents(sampleEvents);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredEvents = events.filter(event => 
    selectedFilter === 'all' || event.type === selectedFilter
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  return (
    <div className="event-calendar">
      <div className="calendar-header">
        <h2>
          <Calendar size={24} />
          Upcoming Events
        </h2>
        <p>Don't miss out on our live performances and special events</p>
      </div>

      <div className="event-filters">
        <button 
          className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('all')}
        >
          All Events
        </button>
        <button 
          className={`filter-btn ${selectedFilter === 'club' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('club')}
        >
          Club Shows
        </button>
        <button 
          className={`filter-btn ${selectedFilter === 'underground' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('underground')}
        >
          Underground
        </button>
        <button 
          className={`filter-btn ${selectedFilter === 'rooftop' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('rooftop')}
        >
          Rooftop
        </button>
      </div>

      <div className="events-grid">
        {filteredEvents.length === 0 ? (
          <div className="no-events">
            <Calendar size={48} />
            <h3>No events scheduled</h3>
            <p>Check back soon for upcoming performances!</p>
          </div>
        ) : (
          filteredEvents.map(event => (
            <div key={event.id} className={`event-card ${!isUpcoming(event.date) ? 'past-event' : ''}`}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-type">{event.type}</div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <div className="event-date">
                    <Calendar size={16} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="event-time">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-location">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-actions">
                  <a 
                    href={event.ticketUrl} 
                    className="ticket-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
