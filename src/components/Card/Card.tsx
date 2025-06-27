import React from 'react';
import './Card.css';
import PlaceHolder from '../../images/Image placeholder.jpg';
import PlaceHolder1 from '../../images/Image placeholder_1.jpg';
import PlaceHolder2 from '../../images/Image placeholder_2.jpg';

type CardProps = {
  cardIng: string;
};
function Card({ cardIng }: CardProps) {
  return (
    <div className="skillCard">
      <div className="skillCard_img">
        <img src={cardIng} alt="" />
      </div>

      <div className="skillCard_text">
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
    <div className="skillCard-gallery">
      <Card cardIng={PlaceHolder} />
      <Card cardIng={PlaceHolder1} />
      <Card cardIng={PlaceHolder2} />
    </div>
  );
}
