import React from 'react';
import './WorkSection.css';
import workCard1 from '../../images/Work_card_1.jpg';
import workCard2 from '../../images/Work_card_2.jpg';
import workCard3 from '../../images/Work_card_3.jpg';
import workCard4 from '../../images/Work_card_4.jpg';
import workCard5 from '../../images/Work_card_5.jpg';
import workCard6 from '../../images/Work_card_6.jpg';

type WorkCardProps = {
  imageUrl: string;
  titel: string;
  discription: string;
};

const workCardInfo: WorkCardProps[] = [
  {
    imageUrl: workCard1,
    titel: 'Free Bird',
    discription: 'Lynyrd Skynyrd',
  },
  {
    imageUrl: workCard2,
    titel: 'Purple Haze',
    discription: 'Jimi Hendrix',
  },
  {
    imageUrl: workCard3,
    titel: 'You Really Got Me',
    discription: 'The Kinks',
  },
  {
    imageUrl: workCard4,
    titel: 'American Girl',
    discription: 'Tom Petty',
  },
  {
    imageUrl: workCard5,
    titel: 'Whole Lotta Love',
    discription: 'Led Zeppelin',
  },
  {
    imageUrl: workCard6,
    titel: 'Under Pressure ',
    discription: 'Queen',
  },
];

function WorkCard({ imageUrl, titel, discription }: WorkCardProps) {
  return (
    <div className="work_card">
      <div className="work_card__image">
        <img src={imageUrl} alt="" />
      </div>

      <div className="work_card__titel">{titel}</div>
      <div className="work_card__discription">{discription}</div>
    </div>
  );
}

export default function GalleryWork() {
  return (
    <div id="work" className="work_section">
      <div className="work_section__text">My latest work</div>
      <div className="work_section-gallery">
        {workCardInfo.map((card, index) => (
          <WorkCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
