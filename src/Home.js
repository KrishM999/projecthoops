import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const heroImages = [
    "/KEV_6811.jpg",
    "/KEV_6841.jpg",
    "/KEV_6901.jpg",
  ];

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + heroImages[Math.floor(Math.random() * 3)]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    margin: '0', 
    fontFamily: 'Helvetica Neue, sans-serif'
  };

  const containerStyle = {
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '20px auto',
    width: '100%', 
    maxWidth: '1500px',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div className="hero-container" style={backgroundStyle}>
        <h1 className="hero-heading">
          Project Hoops is a community-focused nonprofit.
        </h1>

        <p className="hero-subtext">
          We organize annual basketball tournaments to unite players and promote
          youth empowerment across the Bay Area.
        </p>


        <div className="button-wrapper">
          <Link to="/signup">
            <button className="hero-button">
              Sign Up Now <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
