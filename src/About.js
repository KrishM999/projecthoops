import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" style={{ height: '100vh' }}>
      <h1 className="heading-primary text-center">Meet the Team</h1>
      <div className="content-section">
        <p className="paragraph">
          Project Hoops started with an idea to create 
          a platform for basketball enthusiasts to connect and 
          share their love for the sport. Our team is dedicated 
          to providing a space where players can find opportunities to play,
          improve, and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
