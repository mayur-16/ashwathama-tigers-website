import React from 'react';
import { Link } from 'react-router-dom';
import teamLogo from '../assets/optimized/seva_brigade_logo.webp';
import sevayojane5 from '../assets/optimized/sevayojane/sevayojane5.webp';
import sevayojane6 from '../assets/optimized/sevayojane/sevayojane6.webp';
import sevayojane7 from '../assets/optimized/sevayojane/sevayojane7.webp';
import sevayojane8 from '../assets/optimized/sevayojane/sevayojane8.webp';
import teamGroupPic1 from '../assets/optimized/grouppics/teamgrouppic1.webp';

const sevayojaneData = [
  { receiver: 'Jayashree kunjathbail', reason: 'Road accident', image: sevayojane8 },
  { receiver: 'Eshwar Mudipu', reason: 'Leg Surgery', image: sevayojane7 },
  { receiver: 'Charan', reason: 'Compound wall', image: sevayojane6 },
  { receiver: 'Abhilash madanthyar', reason: 'Health issues', image: sevayojane5 },
];

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <picture>
            <source srcSet={teamLogo} type="image/webp" />
            <img src={require('../assets/seva_brigade_logo.png')} alt="Team Ashwatthama Tigers Logo - Tiger Dance Charity in Mangaluru" className="logo" loading="lazy" />
          </picture>
          <div className="team-name">
          <h1>Team Ashwatthama</h1>
          <h3>Edurupadavu Tigers</h3>
          <h3>Seva Brigade (R.)</h3>
        </div>
        </div>
        <div className="hero-banner">
          <h3 className="hero-text young-hearts">Young hearts,</h3>
          <h3 className="hero-text united-change">United for change.</h3>
        </div>
      </section>

      {/* Sevayojane Section */}
      <section className="section sevayojane">
        <h2 className="section-title">Sevayojane Initiatives</h2>
        <p>Our Sevayojane program supports individuals in need through community contributions.</p>
        <div className="sevayojane-grid">
          {sevayojaneData.map((item, index) => (
            <div key={index} className="sevayojane-item">
              <picture>
                <source srcSet={item.image} type="image/webp" />
                <img src={require(`../assets/sevayojane/sevayojane${index + 5}.jpg`)} alt={`Sevayojane support for ${item.receiver} in Mangaluru`} className="sevayojane-img" loading="lazy" />
              </picture>
              <h3 className="sevayojane-name">{item.receiver}</h3>
            </div>
          ))}
        </div>
        <Link to="/sevayojane" className="view-more">View More</Link>
      </section>

      {/* About Section */}
      <section className="section about">
        <h2 className="section-title">About Us</h2>
        <p>
          We are a team of youngsters from Mangaluru, Karnataka, passionate about preserving Tulu Nadu's culture through the Tiger Dance. Performed during Navratri to honor Goddess Sharada . Our Tiger Dance unites the community and supports our charity initiative, <strong>Sevayojane</strong>, helping those in need with donations collected.
        </p>
      </section>

      {/* Team Section */}
      <section className="section team">
        <h2 className="section-title">Our Team</h2>
        <p>Meet the dedicated youngsters behind Team Ashwatthama Tigers!</p>
        <img src={teamGroupPic1} alt="Team Ashwatthama Tigers group performing Tiger Dance in Mangaluru" className="team-img" />
      </section>

      {/* Donation Section */}
      <section className="section donation">
        <h2 className="section-title">Make a Difference Today</h2>
        <p>Your support fuels our mission to preserve culture and uplift lives. Every contribution counts!</p>
        <a
         href="upi://pay?pa=kishannaik199326@oksbi&pn=Team%20Ashwatthama%20Tigers&cu=INR"
          className="donate-button"
        >
          Donate Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="address">
            <span className="address-label">Address :</span>
            <p1>Edurupadavu, Moodushedde, Mangaluru - 575028</p1>
          </div>
          <div className="social-media">
            <span className="social-label">Follow Us</span>
            <a href="https://www.instagram.com/team_.ashwatthama" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Team Ashwatthama Tigers Instagram for Tiger Dance and Charity"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <p>&copy; Team Ashwatthama Tigers. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;