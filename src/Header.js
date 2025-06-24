import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/IMG_6121.PNG" alt="Project Hoops Logo" className="logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
