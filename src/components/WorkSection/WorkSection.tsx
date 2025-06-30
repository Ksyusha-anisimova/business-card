import React from 'react';
import './WorkSection.css';
import WorkCard1 from '../../images/Work_card_1.jpg';
import WorkCard2 from '../../images/Work_card_2.jpg';
import WorkCard3 from '../../images/Work_card_3.jpg';
import WorkCard4 from '../../images/Work_card_4.jpg';
import WorkCard5 from '../../images/Work_card_5.jpg';
import WorkCard6 from '../../images/Work_card_6.jpg';

type WorkCardProps = {
  imageUrl: string;
  titel: string;
  discription: string;
};

const WorkCardInfo: WorkCardProps[] = [
  {
    imageUrl: WorkCard1,
    titel: 'Free Bird',
    discription: 'Lynyrd Skynyrd',
  },
  {
    imageUrl: WorkCard2,
    titel: 'Purple Haze',
    discription: 'Jimi Hendrix',
  },
  {
    imageUrl: WorkCard3,
    titel: 'You Really Got Me',
    discription: 'The Kinks',
  },
  {
    imageUrl: WorkCard4,
    titel: 'American Girl',
    discription: 'Tom Petty',
  },
  {
    imageUrl: WorkCard5,
    titel: 'Whole Lotta Love',
    discription: 'Led Zeppelin',
  },
  {
    imageUrl: WorkCard6,
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
    <div className="work_section-gallery">
      {WorkCardInfo.map((card, index) => (
        <WorkCard key={index} {...card} />
      ))}
    </div>
  );
}
