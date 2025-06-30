import React from 'react';
import './Card.css';
import PlaceHolder from '../../images/Image_placeholder.jpg';
import PlaceHolder1 from '../../images/Image_placeholder_1.jpg';
import PlaceHolder2 from '../../images/Image_placeholder_2.jpg';

type CardProps = {
  imageUrl: string;
  title: string;
  discription: string;
};

const CardInfo: CardProps[] = [
  {
    imageUrl: PlaceHolder1,
    title: 'Product design',
    discription:
      'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    imageUrl: PlaceHolder2,
    title: 'Art direction',
    discription:
      'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    imageUrl: PlaceHolder,
    title: 'Visual design',
    discription:
      'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
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
    <div className="skill_card-gallery">
      {CardInfo.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
