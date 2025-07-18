import React from 'react';
import './Card.css';
import placeHolder1 from '../../images/Image_placeholder.jpg';
import placeHolder2 from '../../images/Image_placeholder_1.jpg';
import placeHolder3 from '../../images/Image_placeholder_2.jpg';

type CardProps = {
  imageUrl: string;
  title: string;
  discription: string;
};

const cardInfo: CardProps[] = [
  {
    imageUrl: placeHolder2,
    title: 'Code You Can See',
    discription:
      'I build interfaces where every button and animation feels right. React, TypeScript, HTML, and CSS are my go-to tools.',
  },
  {
    imageUrl: placeHolder3,
    title: 'Structure and Logic',
    discription:
      'I care about how everything works under the hood — components, routing, state — everything has its place.',
  },
  {
    imageUrl: placeHolder1,
    title: 'Styling with Character',
    discription:
      'I love fine-tuning details — from colors to spacing. Interfaces should not only be functional, but also visually pleasing.',
  },
];
function Card({ imageUrl, title, discription }: CardProps) {
  return (
    <div className="skill_card">
      <div className="skill_card__img">
        <img src={imageUrl} alt="" />
      </div>

      <div className="skill_card__title">{title}</div>
      <div className="skill_card__discription">{discription}</div>
    </div>
  );
}

export default function GalleryCard() {
  return (
    <div className="skill_card-gallery" id="about">
      {cardInfo.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
