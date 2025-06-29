import React from 'react';
import './About.css';

const SponsorUs = () => {
  return (
    <div className="about-container" style={{ height: '100vh' }}>
      <h1 className="heading-primary text-center">Sponsor Us</h1>
      <div className="content-section">
        <p className="paragraph">
          Project Hoops is seeking sponsors to help us grow and reach more basketball enthusiasts. Your support will enable us to provide better resources, organize more events, and foster a vibrant community.
        </p>
        <p className="paragraph">
          Interested in sponsoring us? Please <a href="/contact" className="link">contact us</a> or email us at <a href="mailto:info@projecthoops.com" className="link">info@projecthoops.com</a>.
        </p>
      </div>
    </div>
  );
};

export default SponsorUs; 