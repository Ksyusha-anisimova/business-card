import React from 'react';
import '../ClientSection/ClientSection.css';
import author1 from '../../images/Author1.jpg';
import author2 from '../../images/Author2.jpg';
import author3 from '../../images/Author3.jpg';
import star from '../../images/Star.jpg';

type ClientInfoProps = {
  star: number;
  starUrl: string;
  authorUrl: string;
  discription: string;
  text: string;
};

const clientInfo: ClientInfoProps[] = [
  {
    star: 4,
    starUrl: star,
    authorUrl: author1,
    discription: 'Gemma Nolen, \n' + 'Google',
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    star: 3,
    starUrl: star,
    authorUrl: author2,
    discription: 'Gemma Nolen, \n' + 'Google',
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    star: 4,
    starUrl: star,
    authorUrl: author3,
    discription: 'Gemma Nolen, \n' + 'Google',
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
];

function ClientInfoCard({
  star,
  starUrl,
  authorUrl,
  discription,
}: ClientInfoProps) {
  return (
    <div className="client_card-info">
      <div>
        <img src={authorUrl} alt="" />
      </div>
      <div>
        <div>
          <p>{star}</p>

          <img src={starUrl} alt="" />
          {/*решить вопрос с циклом для звезд*/}
        </div>
        <div>{discription}</div>
      </div>
    </div>
  );
}

function ClientCard(props: ClientInfoProps) {
  return (
    <div className="client_card">
      <div className="client_card__text">{props.text}</div>

      <ClientInfoCard {...props} />
    </div>
  );
}

export default function GalleryClient() {
  return (
    <div className="client_card-all">
      <p className="client_card__title">Clients</p>
      <div className="client_card-gallery">
        {clientInfo.map((card, index) => (
          <ClientCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
