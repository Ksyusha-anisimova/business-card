import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation__list">
      <a href="#">Logo</a>

      <div>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
