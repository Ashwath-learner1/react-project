import React from 'react';
import './Header.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          Block Flexi
        </div>
        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="/" className="navbar__link">Home</a>
          </li>
          <li className="navbar__item">
            <a href="/about" className="navbar__link">About</a>
          </li>
          <li className="navbar__item">
            <a href="/paygold" className="navbar__link">Paygold</a>
          </li>
          <li className="navbar__item">
            <a href="/withdraw" className="navbar__link">Withdraw</a>
          </li>
          <li className="navbar__item">
            <a href="/contact" className="navbar__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
