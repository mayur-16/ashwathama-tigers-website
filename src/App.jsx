import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Sevayojane from './components/Sevayojane';
import Events from './components/Events';
import DonateButton from './components/DonateButton';
import { useCanonical } from './hooks/useCanonical';
import { Menu, X } from 'lucide-react';

// Wrapper component to use canonical hook inside Router
const AppContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Set canonical URL for current page
  useCanonical();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-tiger-400/10' 
            : 'bg-gradient-to-r from-tiger-50/50 to-flame-50/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base lg:text-lg font-semibold transition-all duration-300 hover:text-flame-600 relative group ${
                    isActive ? 'text-flame-600' : 'text-coal-800'
                  }`
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tiger-400 to-flame-600 transition-all group-hover:w-full"></span>
              </NavLink>
              <NavLink 
                to="/sevayojane" 
                className={({ isActive }) => 
                  `text-base lg:text-lg font-semibold transition-all duration-300 hover:text-flame-600 relative group ${
                    isActive ? 'text-flame-600' : 'text-coal-800'
                  }`
                }
              >
                Sevayojane
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tiger-400 to-flame-600 transition-all group-hover:w-full"></span>
              </NavLink>
              <NavLink 
                to="/events" 
                className={({ isActive }) => 
                  `text-base lg:text-lg font-semibold transition-all duration-300 hover:text-flame-600 relative group ${
                    isActive ? 'text-flame-600' : 'text-coal-800'
                  }`
                }
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tiger-400 to-flame-600 transition-all group-hover:w-full"></span>
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-tiger-100 transition-colors text-coal-800"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Donate Button */}
            <div className="ml-auto">
              <DonateButton />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isDrawerOpen && (
          <div className="md:hidden bg-white border-t border-tiger-200 shadow-lg animate-slide-down">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-tiger-100 to-flame-100 text-flame-600' 
                      : 'text-coal-700 hover:bg-tiger-50'
                  }`
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/sevayojane"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-tiger-100 to-flame-100 text-flame-600' 
                      : 'text-coal-700 hover:bg-tiger-50'
                  }`
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                Sevayojane
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-tiger-100 to-flame-100 text-flame-600' 
                      : 'text-coal-700 hover:bg-tiger-50'
                  }`
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                Events
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sevayojane" element={<Sevayojane />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;