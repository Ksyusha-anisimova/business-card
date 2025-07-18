import React, { useState } from 'react';
import './Navigation.css';
import menuButton from '../../images/header__menu-button.png';
import lightTheme from '../../images/lightTheme.png';
import darkTheme from '../../images/darkTheme.png';
import { useTheme } from '../../hooks/useTheme';

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const [theme, setTheme] = useTheme();
  return (
    <>
      <nav className="navigation__list">
        <a href="#" className="navigation_logo">
          Logo
        </a>

        <div className="navigation_button">
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

          <button
            id="dark-theme"
            className="dark_theme"
            onClick={() => setTheme('dark')}
          >
            <img src={darkTheme} alt="" />
          </button>
          <button
            id="light-theme"
            className="light_theme"
            onClick={() => setTheme('light')}
          >
            <img src={lightTheme} alt="" />
          </button>
        </div>
      </nav>
    </>
  );
}
