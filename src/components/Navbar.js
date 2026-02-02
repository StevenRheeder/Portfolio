import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <Link to="/" className="logo-link">
          <span id="name">Steven</span>
          <span id="work">Dev</span>
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}

export default Navbar;
