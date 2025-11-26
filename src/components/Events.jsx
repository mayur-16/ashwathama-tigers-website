import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';
import mosarukudike2025 from '../assets/mosarukudike/mosarukudike2025.webp';
import oodu_2025 from '../assets/events/oodu_2025.webp';

const eventsData = [
  {
    title: 'Mosarukudike 2025',
    date: '2025',
    description: 'Traditional Tulu cultural celebration on occasion of Krishna Janmashtami',
    image: mosarukudike2025,
    alt: 'Mosarukudike cultural event by Team Ashwatthama Tigers in Edurupadavu Mangalore'
  },
  {
    title: 'Oodu Pooja 2025',
    date: '2025',
    description: 'Sacred ritual blessing ceremony performed by Team Ashwatthama Tigers before Navratri tiger dance season',
    image: oodu_2025,
    alt: 'Oodu pooja  ceremony of Team Ashwatthama Tigers ,tiger dance team in Mangalore'
  }
];

const Events = () => {
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
            Cultural Events
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tiger-400 via-flame-500 to-transparent rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg text-coal-700 max-w-3xl mt-6">
            We engage in cultural and social initiatives like <strong>Mosarukudike, Navratri, and Deepavali celebrations</strong> which is held in <strong> Edurupadavu, Moodushedde, Vamanjoor</strong> to promote <strong>Tulu Nadu's rich heritage</strong> 
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-2 border-tiger-100 hover:border-flame-400"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-900/80 via-coal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm sm:text-base font-medium">{event.description}</p>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 bg-gradient-to-br from-tiger-50 to-white">
                <div className="flex items-center gap-2 text-flame-600 mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">{event.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-coal-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-coal-600 text-sm sm:text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tiger Dance Information Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-flame-50 via-tiger-50 to-flame-50 rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-tiger-200">
          
          <div className="text-center">
            <p className="text-base sm:text-lg text-coal-600 mb-6 max-w-2xl mx-auto">
              Follow us on social media to stay updated on our upcoming <strong>tiger dance performances</strong> and cultural events in <strong>Edurupadavu, Moodushedde, Vamanjoor, and across Mangalore</strong>.
            </p>
            <a
              href="https://www.instagram.com/team_.ashwatthama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-flame-600 to-flame-500 hover:from-flame-700 hover:to-flame-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-glow-orange transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;