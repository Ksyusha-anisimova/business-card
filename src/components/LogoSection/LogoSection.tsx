import React from 'react';
import './LogoSection.css';
import Behance from '../../images/Behance.jpg';
import Apple from '../../images/Apple.jpg';
import Awwwards from '../../images/Awwwards.jpg';
import Dribbble from '../../images/Dribbble.jpg';
import Google from '../../images/Google.jpg';

type CardProps = {
  imageUrl: string;
};

function CardLogo({ imageUrl }: CardProps) {
  return (
    <div className="card_logo__image">
      <img src={imageUrl} alt="" />
    </div>
  );
}
export default function GalleryLogo() {
  return (
    <div className="gallery_logo__list">
      <CardLogo imageUrl={Behance} />
      <CardLogo imageUrl={Google} />
      <CardLogo imageUrl={Apple} />
      <CardLogo imageUrl={Dribbble} />
      <CardLogo imageUrl={Awwwards} />
    </div>
  );
}
