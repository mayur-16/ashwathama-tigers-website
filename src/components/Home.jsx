import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DonateButton from './DonateButton';
import teamLogo from '../assets/seva_brigade_logo.webp';
import sevayojane5 from '../assets/sevayojane/sevayojane5.webp';
import sevayojane6 from '../assets/sevayojane/sevayojane6.webp';
import sevayojane7 from '../assets/sevayojane/sevayojane7.webp';
import sevayojane8 from '../assets/sevayojane/sevayojane8.webp';
import teamGroupPic1 from '../assets/grouppics/teamgrouppic1.webp';

const sevayojaneData = [
  { receiver: 'Jayashree kunjathbail', reason: 'Road accident', image: sevayojane8 },
  { receiver: 'Eshwar Mudipu', reason: 'Leg Surgery', image: sevayojane7 },
  { receiver: 'Charan', reason: 'Compound wall', image: sevayojane6 },
  { receiver: 'Abhilash madanthyar', reason: 'Health issues', image: sevayojane5 },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Logo & Team Name */}
        <div className="relative z-10 bg-gradient-to-r from-tiger-50 via-white to-flame-50 shadow-md border-b-2 border-tiger-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex items-center gap-3 sm:gap-4 animate-fade-in">
              <img
                src={teamLogo}
                alt="Team Ashwatthama Tigers Logo - Best Tiger Dance Mangalore"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-tiger-800">
                  Team Ashwatthama
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-flame-700">
                  Edurupadavu Tigers
                </h2>
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-coal-800">
                  Seva Brigade (R.)
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className=" relative flex-1 min-h-[30vh] sm:min-h-[40vh] lg:min-h-[70vh] flex items-center justify-center">    
              <div className="absolute inset-0">
          <img
            src={sevayojane6}
            alt="Best Pili Vesha Tiger Dance Team in Edurupadavu, Moodushedde, Vamanjoor Mangalore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coal-900/70 via-coal-800/60 to-coal-900/80"></div>
        </div>

          <div className="relative z-10 h-full flex flex-col items-start justify-center px-4 text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiger-300 via-tiger-400 to-flame-400 drop-shadow-2xl">Young hearts,</span>
            </h2>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-white drop-shadow-2xl">United for change.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Sevayojane Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tiger-50 via-white to-flame-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-tiger-stripes opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 sm:mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-flame-600 mb-2 relative inline-block">
              Sevayojane Initiatives
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tiger-400 via-flame-500 to-transparent rounded-full"></span>
            </h2>
            <p className="text-base sm:text-lg text-coal-700 max-w-3xl mt-6">
              Our Sevayojane program supports individuals in need through community contributions. As the best charity tiger dance team in Mangalore, we combine cultural preservation with social service.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {sevayojaneData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-2 border-tiger-100 hover:border-flame-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[9/7] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={`Sevayojane charity support for ${item.receiver} by Team Ashwatthama Tigers Mangalore`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-tiger-50 to-white">
                  <h3 className="text-sm sm:text-base font-semibold text-coal-800 mb-1">
                    {item.receiver}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/sevayojane"
            className="inline-flex items-center text-flame-600 hover:text-flame-700 font-semibold text-base sm:text-lg group transition-colors"
          >
            View More Charity Work
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold text-flame-600 mb-2 relative inline-block">
              About Us - Tiger Dance Team Mangalore
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tiger-400 via-flame-500 to-transparent rounded-full"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-coal-700 leading-relaxed">
                We are <strong className="text-flame-600">Team Ashwatthama Tigers</strong>, an <strong>Pili Vesha (Tiger Dance)</strong> team from <strong>Edurupadavu, Moodushedde, and Vamanjoor</strong> in Mangaluru, Karnataka. We're passionate about preserving <strong>Tulu Nadu's rich cultural heritage</strong> through authentic <strong>Hulivesha performances</strong>.
              </p>
              <p className="text-base sm:text-lg text-coal-700 leading-relaxed">
                Our tiger dancers perform during <strong>Navratri , Dasara</strong> to honor Goddess Sharada. Recognized as one of the <strong>best tiger dance teams in coastal Karnataka</strong>, we unite the Mangalore community through spectacular performances featuring traditional body painting, acrobatic stunts, and rhythmic drum beats.
              </p>
              <p className="text-base sm:text-lg text-coal-700 leading-relaxed">
                Beyond cultural performances, we run <strong className="text-flame-600">Sevayojane</strong>, our charity initiative supporting those in need. We're proud to be a tiger dance team that combines artistic excellence with social responsibility.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tiger-400 to-flame-500 rounded-2xl transform rotate-3"></div>
              <img
                src={teamGroupPic1}
                alt="Team Ashwatthama Tigers - Best Pili Vesha Tiger Dance Group in Edurupadavu Mangalore"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-flame-600 via-flame-500 to-tiger-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tiger-stripes opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Support Tulu Culture & Community
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-95">
            Your donation helps us preserve traditional tiger dance and support those in need through our Sevayojane program.
          </p>
          <DonateButton className="bg-white text-flame-600 hover:bg-tiger-50 shadow-glow-strong" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coal-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-sm font-semibold text-tiger-400 mb-3">Contact Address</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Edurupadavu, Moodushedde<br />
                Vamanjoor, Mangaluru - 575028<br />
                Karnataka, India
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-tiger-400 mb-3">Follow Us</h3>
              <a
                href="https://www.instagram.com/team_.ashwatthama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-tiger-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @team_.ashwatthama
              </a>
            </div>
          </div>
          <div className="border-t border-coal-700 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-2">
              Tiger Dance Team | Charity Initiative
            </p>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Team Ashwatthama Tigers - Seva Brigade (R.). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;