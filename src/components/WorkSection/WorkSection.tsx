import React from 'react';
import './WorkSection.css';
import workCard1 from '../../images/flat.png';
import workCard2 from '../../images/gazell.2.png';
import workCard3 from '../../images/house.png';
import workCard4 from '../../images/justspaceshoot_app.jpg';
import workCard5 from '../../images/IT_TypeScript.jpg';
import workCard6 from '../../images/gym.jpg';

type WorkCardProps = {
  imageUrl: string;
  titel: string;
  discription: string;
};

const workCardInfo: WorkCardProps[] = [
  {
    imageUrl: workCard1,
    titel: 'Тульская квартирка',
    discription: 'Создание под ключ',
  },
  {
    imageUrl: workCard2,
    titel: 'Gazel-Traffic',
    discription: 'Создание под ключ',
  },
  {
    imageUrl: workCard3,
    titel: 'Тульский центр недвижимости',
    discription: 'Контекстная реклама',
  },
  {
    imageUrl: workCard4,
    titel: 'Just Space Shoot',
    discription: 'Создание под ключ',
  },
  {
    imageUrl: workCard5,
    titel: 'ТЦН',
    discription: 'Создание под ключ',
  },
  {
    imageUrl: workCard6,
    titel: 'Sportlifting',
    discription: 'Техническая поддержка и Продвижение',
  },
];

function WorkCard({ imageUrl, titel, discription }: WorkCardProps) {
  return (
    <div className="work_card">
      <div className="work_card__image">
        <img src={imageUrl} alt="" />
      </div>

      <div className="card__data">
        <div className="work_card__titel">{titel}</div>
        <div className="work_card__discription">{discription}</div>
      </div>
    </div>
  );
}

export default function GalleryWork() {
  return (
    <div id="work" className="work_section">
      <div className="work_section__text">Сases</div>
      <div className="work_section-gallery">
        {workCardInfo.map((card, index) => (
          <WorkCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
