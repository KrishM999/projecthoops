import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <img src="/IMG_6121.png" alt="Project Hoops Logo" className="logo" />
            <span className="logo-text">Project Hoops</span>
          </Link>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="header-nav">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/signup" 
                className={`signup-nav-btn ${location.pathname === '/signup' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link 
                to="/sponsor-us" 
                className={`sponsor-nav-btn ${location.pathname === '/sponsor-us' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Sponsor Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

