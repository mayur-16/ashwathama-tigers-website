import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import sevayojane1 from '../assets/sevayojane/sevayojane1.jpg';
import sevayojane2 from '../assets/sevayojane/sevayojane2.jpg';
import sevayojane3 from '../assets/sevayojane/sevayojane3.jpg';
import sevayojane4 from '../assets/sevayojane/sevayojane4.jpg';
import sevayojane5 from '../assets/sevayojane/sevayojane5.jpg';
import sevayojane6 from '../assets/sevayojane/sevayojane6.jpg';
import sevayojane7 from '../assets/sevayojane/sevayojane7.jpg';
import sevayojane8 from '../assets/sevayojane/sevayojane8.jpg';


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
            <img src={item.image} alt={`Sevayojane support for ${item.receiver} in Mangaluru`} className="sevayojane-img" />
            <h3 className="sevayojane-name">{item.receiver}</h3>
            <p className="sevayojane-reason">{item.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sevayojane;