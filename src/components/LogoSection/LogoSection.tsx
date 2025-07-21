import React from 'react';
import './LogoSection.css';
import ReactLogo from '../../images/react.svg?react';
import Html from '../../images/html.svg?react';
import Css from '../../images/css.svg?react';
import TypeScript from '../../images/typescript.svg?react';

export default function GalleryLogo() {
  return (
    <div className="gallery_logo__list">
      <TypeScript className="card_logo__image" />
      <Html className="card_logo__image" />
      <Css className="card_logo__image" />
      <ReactLogo className="card_logo__image" />
    </div>
  );
}
