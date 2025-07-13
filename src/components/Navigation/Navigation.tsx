import React, { useState } from 'react';
import './Navigation.css';
import menuButton from '../../images/header__menu-button.png';

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="navigation__list">
        <a href="#" className="navigation_logo">
          Logo
        </a>

        <div className={`navigation_link ${isOpen ? 'active' : ''}`}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="header__menu-button"
          onClick={() => setOpen(!isOpen)}
        >
          <img src={menuButton} alt="" />
        </button>
      </nav>
    </>
  );
}
