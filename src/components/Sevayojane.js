import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import sevayojane1 from '../assets/optimized/sevayojane/sevayojane1.webp';
import sevayojane2 from '../assets/optimized/sevayojane/sevayojane2.webp';
import sevayojane3 from '../assets/optimized/sevayojane/sevayojane3.webp';
import sevayojane4 from '../assets/optimized/sevayojane/sevayojane4.webp';
import sevayojane5 from '../assets/optimized/sevayojane/sevayojane5.webp';
import sevayojane6 from '../assets/optimized/sevayojane/sevayojane6.webp';
import sevayojane7 from '../assets/optimized/sevayojane/sevayojane7.webp';
import sevayojane8 from '../assets/optimized/sevayojane/sevayojane8.webp';

const sevayojaneData = [
  { receiver: 'Jayashree kunjathbail', reason: 'Road accident', image: sevayojane8 },
  { receiver: 'Eshwar Mudipu', reason: 'Leg surgery', image: sevayojane7 },
  { receiver: 'Charan', reason: 'Compound wall', image: sevayojane6 },
  { receiver: 'Abhilash madanthyar', reason: 'Health issues', image: sevayojane5 },
  { receiver: 'Sathwik Devadiga', reason: 'Bone cancer', image: sevayojane4 },
  { receiver: 'Santhosh Iruvail', reason: 'Blood cancer', image: sevayojane3 },
  { receiver: 'M. Jagannatha', reason: 'Chest pain', image: sevayojane2 },
  { receiver: 'Neetha Bushan Jalligudde', reason: 'Blood cancer', image: sevayojane1 },
];

const Sevayojane = () => {
  return (
    <section className="section sevayojane">
      <Link to="/" className="back-link">
        <ChevronLeft className="back-icon" size={20} />
        Back
      </Link>
      <h2 className="section-title">Sevayojane Initiatives</h2>
      <p>Our Sevayojane program supports individuals facing health challenges with community contributions.</p>
      <div className="sevayojane-grid">
        {sevayojaneData.map((item, index) => (
          <div key={index} className="sevayojane-item">
            <picture>
              <source srcSet={item.image} type="image/webp" />
              <img src={require(`../assets/sevayojane/sevayojane${8 - index}.jpg`)} alt={`Sevayojane support for ${item.receiver} in Mangaluru`} className="sevayojane-img" loading="lazy" />
            </picture>
            <h3 className="sevayojane-name">{item.receiver}</h3>
            <p className="sevayojane-reason">{item.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sevayojane;