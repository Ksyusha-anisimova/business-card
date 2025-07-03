import React from 'react';
import '../Footer/Footer.css';
import Apple from '../../images/Apple.jpg';

type footerInfoProps = {
  footerUrl: string;
};
const footerIno: footerInfoProps[] = [
  { footerUrl: Apple },
  { footerUrl: Apple },
];
function SocialIcon({ footerUrl }: footerInfoProps) {
  return (
    <div>
      <img src={footerUrl} alt="" />
    </div>
  );
}

type TextFieldProps = {
  name: string;
  height: number;
  type: string;
};
const textFieldInfo: TextFieldProps[] = [
  {
    name: 'Name',
    height: 69,
    type: 'text',
  },
  {
    name: 'Email',
    height: 69,
    type: 'Email',
  },
  {
    name: 'Type your message here',
    height: 231,
    type: 'text',
  },
];
function TextField({ name, height, type }: TextFieldProps) {
  return (
    <div className="text_fiels">
      <input type={type} height={height} placeholder={name} />
    </div>
  );
}
export default function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div>
          <div className="footer__text">
            <p>Let’s work together</p>
            <p>
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>
          </div>

          <div className="footer__img">
            {footerIno.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>

        <div className="text_fiels-gallery">
          {textFieldInfo.map((text, index) => (
            <TextField key={index} {...text} />
          ))}
        </div>
      </div>
    </>
  );
}
