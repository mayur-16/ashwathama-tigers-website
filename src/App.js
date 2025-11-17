import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sevayojane from './components/Sevayojane';
import Events from './components/Events';
import DonateButton from './components/DonateButton';
import { Menu, X } from 'lucide-react';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="nav-tabs desktop-nav">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/sevayojane" className="nav-link" activeClassName="active">Sevayojane</NavLink>
            <NavLink to="/events" className="nav-link" activeClassName="active">Events</NavLink>
          </div>
          <button className="mobile-nav" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`mobile-nav-links ${isDrawerOpen ? 'open' : ''}`}>
            <NavLink to="/" className="nav-link" activeClassName="active" onClick={() => setIsDrawerOpen(false)}>Home</NavLink>
            <NavLink to="/sevayojane" className="nav-link" activeClassName="active" onClick={() => setIsDrawerOpen(false)}>Sevayojane</NavLink>
            <NavLink to="/events" className="nav-link" activeClassName="active" onClick={() => setIsDrawerOpen(false)}>Events</NavLink>
          </div>
          {/* Changed from <a> tag to DonateButton component */}
          <DonateButton>Donate</DonateButton>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sevayojane" element={<Sevayojane />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;