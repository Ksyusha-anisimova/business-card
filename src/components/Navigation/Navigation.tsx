import React, { useEffect } from 'react';
import './Navigation.css';
// import menuButton from '../../images/header__menu-button.png';
import DarkThemeIcon from '../../images/moon.svg?react';
import LightThemeIcon from '../../images/sun.svg?react';
import Burger from '../../images/burger.svg?react';
import Cross from '../../images/cross.svg?react';

import { useTheme } from '../../hooks/useTheme';

import { useState } from 'react';
import { useRef } from 'react';

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const [theme, setTheme] = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);
    return () => document.removeEventListener('mousedown', handleClickOutSide);
  });

  useEffect(() => {
    const handleAnchorClick = () => {
      setOpen(false);
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener('click', handleAnchorClick)
    );
    return () =>
      anchors.forEach((anchor) =>
        anchor.addEventListener('click', handleAnchorClick)
      );
  }, []);
  return (
    <>
      <nav className="navigation__list">
        <a href="#" className="navigation_logo">
          ksuanima
        </a>

        <div className="navigation_button">
          <div
            className={`navigation_link ${isOpen ? 'active' : ''}`}
            ref={menuRef}
          >
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="header__menu-button"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <Cross />
            ) : (
              // <Burger className={`burger ${isOpen ? '' : 'visible'}`} />
              <Burger />
            )}
            {/*<img src={menuButton} alt="" />*/}
          </button>

          <button
            id="dark-theme"
            className="dark_theme"
            onClick={() => setTheme('dark')}
          >
            <DarkThemeIcon />
          </button>
          <button
            id="light-theme"
            className="light_theme"
            onClick={() => setTheme('light')}
          >
            {/*<img src={lightTheme} alt="" />*/}
            <LightThemeIcon />
          </button>
        </div>
      </nav>
    </>
  );
}
