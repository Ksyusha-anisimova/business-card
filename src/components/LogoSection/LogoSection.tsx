import React from 'react';
import './LogoSection.css';
import logo1 from '../../images/Behance.jpg';
import logo3 from '../../images/Apple.jpg';
import logo5 from '../../images/Awwwards.jpg';
import logo4 from '../../images/Dribbble.jpg';
import logo2 from '../../images/Google.jpg';

type LogoCardProps = {
  imageUrl: string;
};

function CardLogo({ imageUrl }: LogoCardProps) {
  return (
    <div className="card_logo__image">
      <img src={imageUrl} alt="" />
    </div>
  );
}
export default function GalleryLogo() {
  return (
    <div className="gallery_logo__list">
      <CardLogo imageUrl={logo1} />
      <CardLogo imageUrl={logo2} />
      <CardLogo imageUrl={logo3} />
      <CardLogo imageUrl={logo4} />
      <CardLogo imageUrl={logo5} />
    </div>
  );
}
