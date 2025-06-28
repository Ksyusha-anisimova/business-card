import React from 'react';
import './Card.css';
import PlaceHolder from '../../images/Image_placeholder.jpg';
import PlaceHolder1 from '../../images/Image_placeholder_1.jpg';
import PlaceHolder2 from '../../images/Image_placeholder_2.jpg';

type CardProps = {
  cardIng: string;
};
function Card({ cardIng }: CardProps) {
  return (
    <div className="skill_card">
      <div className="skill_card__img">
        <img src={cardIng} alt="" />
      </div>

      <div className="skill_card__text">
        <section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          facere id incidunt, iure neque non officia officiis quae rerum
          suscipit totam unde! Ab animi asperiores dicta dolores minima quia
          voluptatibus.
        </section>
      </div>
    </div>
  );
}

export default function GalleryCard() {
  return (
    <div className="skill_card-gallery">
      <Card cardIng={PlaceHolder} />
      <Card cardIng={PlaceHolder1} />
      <Card cardIng={PlaceHolder2} />
    </div>
  );
}
