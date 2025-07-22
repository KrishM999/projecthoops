import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/IMG_6121.png" alt="Project Hoops Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Project Hoops</span>
            </div>
            <p className="footer-description">
              A community-focused nonprofit organizing basketball tournaments to unite players 
              and promote youth empowerment across the Bay Area.
            </p>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/project_hoops_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_N4PEKXjJ5XWt9ur9Xw-BgCejwxKssfZdEb2BSdfI2U4wJw/viewform" target="_blank" rel="noopener noreferrer" className="footer-link">Sign Up</a>
              <Link to="/sponsor-us" className="footer-link">Sponsor Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>projecthoops20@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Bay Area, California</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>Available via email</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-title">Support Our Cause</h3>
            <p className="support-text">
              Help us expand basketball programs and youth development initiatives.
            </p>
            <a 
              href="https://www.gofundme.com/f/help-vt-seva-provide-for-unprivileged-kids?utm_campaign=natman_sharesheet_dash&utm_medium=customer&utm_source=copy_link&attribution_id=sl:f1817a51-c678-48c6-b06f-6e85d4d302b4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-btn"
            >
              <Heart size={18} />
              Donate Now
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Project Hoops. All rights reserved.
            </p>
            <p className="youth-message">
              Made by students for students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

