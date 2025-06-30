import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/IMG_6121.png" alt="Project Hoops Logo" className="logo" />
        </Link>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        &#9776;
      </button>
      <nav className="header-nav">
        <div
          className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        />
        <ul
          id="main-nav"
          className={`nav-links${menuOpen ? ' open' : ''}`}
          onClick={closeMenu}
          role="menu"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/sponsor-us">Sponsor Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
