import React from 'react';
import './Experience.css';
import Author1 from '../../images/just-space-logo.svg?react';
import Grabr from '../../images/grabr.svg?react';

type ExperienceProps = {
  LogoUrl: React.FC<React.SVGProps<SVGSVGElement>>;
  discription: string;
  data: string;
  text: string;
};

const experienceInfo: ExperienceProps[] = [
  {
    LogoUrl: Grabr,
    discription: 'Grabr, Remote — Front-End Developer',
    data: 'Июнь 2024 — н.в.',
    text: 'Разрабатывала внутренний основной веб-сайт, целевые страницы и панель администратора с использованием стека React, Redux и TypeScript. Создавала адаптивные и повторно используемые UI-компоненты для собственного UI-кита, использовавшегося во всех проектах компании. Применяла методы адаптивного дизайна и CSS-анимации для улучшения пользовательского опыта. Настраивала конфигурацию Webpack для повышения производительности сборки и уменьшения размера пакета. Также настраивала пайплайны CI/CD для автоматизации процесса развертывания.',
  },
  {
    LogoUrl: Author1,
    discription: 'Just Space, Tula — Front-End Developer',
    data: 'Май 2022 — Май 2024',
    text: 'Разработала более 10 адаптивных веб-сайтов и лендингов с использованием React и семантического HTML/CSS, переводила макеты из Figma в точные и отзывчивые front-end-реализации. Настраивала окружение с ESLint, Prettier и TypeScript для соблюдения единых стандартов кодирования и поддержания чистоты проекта. Участвовала в код-ревью, учитывая обратную связь от ведущих инженеров, и подготавливала техническую документацию для облегчения адаптации и сопровождения клиентов.',
  },
];

function ExperienceCard({ LogoUrl, discription, data, text }: ExperienceProps) {
  return (
    <>
      <div className="experience_card">
        <div className="experience_img">
          <LogoUrl className="experience_logo" />
        </div>
        <div className="text_block">
          <div className="text_main">{discription}</div>

          <div className="text_data">{data}</div>

          <div className="text_il">{text}</div>
        </div>
      </div>
    </>
  );
}

export default function GalleryExperience() {
  return (
    <>
      <div className="experience_all">
        <p>Experience</p>

        <div className="experience_gallery">
          {experienceInfo.map((card, index) => (
            <ExperienceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
