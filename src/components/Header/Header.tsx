import React from 'react';
import './Header.css';
import headerImage from '../../images/header_image.jpg';

export default function Header() {
  return (
    <div className="hero_image">
      <div className="header_text">
        <section>
          <p className="text">Branding | Image making </p>
          <span className="text main_text">My awesome portfolio</span>
          <p className="text">And I made it myself! Yes. In Figma with Anima</p>
        </section>
      </div>

      <div className="header_image">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
}
