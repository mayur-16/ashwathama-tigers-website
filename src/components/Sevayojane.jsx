import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import sevayojane1 from '../assets/sevayojane/sevayojane1.webp';
import sevayojane2 from '../assets/sevayojane/sevayojane2.webp';
import sevayojane3 from '../assets/sevayojane/sevayojane3.webp';
import sevayojane4 from '../assets/sevayojane/sevayojane4.webp';
import sevayojane5 from '../assets/sevayojane/sevayojane5.webp';
import sevayojane6 from '../assets/sevayojane/sevayojane6.webp';
import sevayojane7 from '../assets/sevayojane/sevayojane7.webp';
import sevayojane8 from '../assets/sevayojane/sevayojane8.webp';

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
    <section className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tiger-50 via-white to-flame-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-tiger-stripes opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-flame-600 hover:text-flame-700 font-semibold mb-6 sm:mb-8 group transition-colors"
        >
          <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-8 sm:mb-12 animate-slide-up">
          <h1 className="text-2xl sm:text-4xl lg:text-3xl font-bold text-flame-600 mb-2 relative inline-block">
            Sevayojane Charity Initiatives
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tiger-400 via-flame-500 to-transparent rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg text-coal-700 max-w-3xl mt-6">
            Our <strong>Sevayojane program</strong>, rooted in Mangaluru's <strong>Edurupadavu, Moodushedde, and Vamanjoor</strong> communities, supports individuals facing health challenges with contributions collected through our <strong>tiger dance performances</strong>. As a charity-focused Pili Vesha team, we believe in giving back to our community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sevayojaneData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-2 border-tiger-100 hover:border-flame-400"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[9/7] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={`Sevayojane charity support for ${item.receiver} by Team Ashwatthama Tigers Mangalore`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 bg-gradient-to-br from-tiger-50 to-white">
                <h3 className="text-base sm:text-lg font-semibold text-coal-800 mb-2">
                  {item.receiver}
                </h3>
                <p className="text-sm text-coal-600 flex items-center">
                  <span className="w-2 h-2 bg-flame-500 rounded-full mr-2"></span>
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-br from-tiger-100 via-flame-50 to-tiger-100 rounded-2xl p-8 sm:p-12 animate-fade-in shadow-lg border-2 border-tiger-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-coal-800 mb-4">
            Support Our Community Service
          </h2>
          <p className="text-base sm:text-lg text-coal-600 mb-6 max-w-2xl mx-auto">
            Every contribution helps us continue supporting those in need within the <strong>Edurupadavu, Moodushedde, and Vamanjoor communities</strong> while preserving our rich <strong>tiger dance tradition</strong>.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-flame-600 to-flame-500 hover:from-flame-700 hover:to-flame-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-glow-orange transform hover:scale-105"
          >
            Learn More About Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sevayojane;