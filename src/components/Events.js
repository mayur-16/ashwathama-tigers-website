import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import mosarukudike2025 from '../assets/mosarukudike/mosarukudike2025.jpg';

const Events = () => {
  return (
    <section className="section events">
      <Link to="/" className="back-link">
        <ChevronLeft className="back-icon" size={20} />
        Back
      </Link>
      <h2 className="section-title">Events</h2>
      <p>We engage in cultural and social initiatives like Mosarukudike and Swachh Bharath to promote heritage and cleanliness.</p>
      <div className="event-item">
        <h3 className="event-name">Mosarukudike 2025</h3>
        <img src={mosarukudike2025} alt="Mosarukudike cultural event by Team Ashwatthama Tigers in Mangaluru" className="event-img" />
      </div>
    </section>
  );
};

export default Events;