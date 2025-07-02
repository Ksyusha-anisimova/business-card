import React from 'react';
import '../ClientSection/ClientSection.css';
import StarUrl from '../../images/Work_card_1.jpg';
import Author1 from '../../images/Author1.jpg';
import Author2 from '../../images/Author2.jpg';
import Author3 from '../../images/Author3.jpg';
import Star from '../../images/Star.jpg';

type ClientInfoProps = {
  star: number;
  starUrl: string;
  authorUrl: string;
  discription: string;
  text: string;
};

const ClientInfo: ClientInfoProps[] = [
  {
    star: 4,
    starUrl: Star,
    authorUrl: Author1,
    discription: 'Gemma Nolen, \n' + 'Google',
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    star: 3,
    starUrl: Star,
    authorUrl: Author2,
    discription: 'Gemma Nolen, \n' + 'Google',
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  },
  {
    star: 4,
    starUrl: Star,
    authorUrl: Author3,
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
      <div>{props.text}</div>

      <ClientInfoCard {...props} />
    </div>
  );
}

export default function GalleryClient() {
  return (
    <div className="client_card-gallery">
      {ClientInfo.map((card, index) => (
        <ClientCard key={index} {...card} />
      ))}
    </div>
  );
}
