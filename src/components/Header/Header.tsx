import React from 'react';
import './Header.css';
import header from '../../images/header_image.jpg';
import Waves from '../../images/waves.svg?react';

export default function Header() {
  return (
    <div className="hero__image">
      <div className="header__text">
        <section>
          <p className="text">
            Front-End Developer | React | TypeScript | CSS-in-JS{' '}
          </p>
          <span className="text main__text">Anisimova Kseniia</span>
          <p className="text">
            I develop reliable web interfaces with a focus on scalability,
            performance, and compliance with modern standards. Over three years
            of experience in commercial development.
          </p>
        </section>
      </div>

      <div className="header__image">
        {/*<img src={header} alt="" />*/}
        <Waves className="header__image" style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: -1}}/>
      </div>
    </div>
  );
}
