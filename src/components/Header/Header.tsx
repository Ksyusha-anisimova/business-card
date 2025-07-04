import React from 'react';
import './Header.css';
import header from '../../images/header_image.jpg';

export default function Header() {
  return (
    <div className="hero__image">
      <div className="header__text">
        <section>
          <p className="text">Branding | Image making </p>
          <span className="text main__text">My awesome portfolio</span>
          <p className="text">And I made it myself! Yes. In Figma with Anima</p>
        </section>
      </div>

      <div className="header__image">
        <img src={header} alt="" />
      </div>
    </div>
  );
}
