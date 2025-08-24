import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import mosarukudike2025 from '../assets/optimized/mosarukudike/mosarukudike2025.webp';
import oodu_2025 from '../assets/optimized/events/oodu_2025.webp';

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
        <picture>
          <source srcSet={mosarukudike2025} type="image/webp" />
          <img src={require('../assets/mosarukudike/mosarukudike2025.jpg')} alt="Mosarukudike cultural event by Team Ashwatthama Tigers in Mangaluru" className="event-img" loading="lazy" />
        </picture>
      </div>
      <div className="event-item">
        <h3 className="event-name">Oodu pooja 2025</h3>
        <picture>
          <source srcSet={oodu_2025} type="image/webp" />
          <img src={require('../assets/events/oodu_2025.jpg')} alt="Oodu pooja of Team Ashwatthama Tigers in Mangaluru" className="event-img" loading="lazy" />
        </picture>
      </div>
    </section>
  );
};

export default Events;