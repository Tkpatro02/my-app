// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1 className='welcome-tope'>OpenBooks.com</h1>
        <p className="tagline">Your Gateway to Knowledge</p>
      </header>

      <main>
      <section className="featured-card">
          <div className="card">
            <h3>Featured Content</h3>
            <p>Description of the featured content goes here.</p>
            <Link to="/featured-details">Learn More</Link>
          </div>
        </section>
      
        <section className="cta-section">
          <h2>Start Your Learning Journey Today!</h2>
          <p>Explore a variety of courses and expand your knowledge.</p>
          <Link to="/loginpage" className="cta-button">Get Started</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 OpenBooks.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
