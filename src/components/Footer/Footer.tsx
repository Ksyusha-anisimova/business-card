import React from 'react';
import '../Footer/Footer.css';
import vector1 from '../../images/Vector1.jpg';
import vector2 from '../../images/Vector2.jpg';
import vector3 from '../../images/Vector3.jpg';
import vector4 from '../../images/Vector4.jpg';
import vector5 from '../../images/Vector5.jpg';

type footerInfoProps = {
  footerUrl: string;
};
const footerIno: footerInfoProps[] = [
  { footerUrl: vector1 },
  { footerUrl: vector2 },
  { footerUrl: vector3 },
  { footerUrl: vector4 },
  { footerUrl: vector5 },
];
function SocialIcon({ footerUrl }: footerInfoProps) {
  return (
    <div>
      <img src={footerUrl} alt="" className="footer__img" />
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
    height: 27,
    type: 'text',
  },
  {
    name: 'Email',
    height: 27,
    type: 'Email',
  },
  {
    name: 'Type your message here',
    height: 189,
    type: 'text',
  },
];
function TextField({ name, height, type }: TextFieldProps) {
  return (
    <div className="text_fiels">
      <input type={type} style={{ height: `${height}px` }} placeholder={name} />
    </div>
  );
}
export default function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div>
          <div className="footer__text">
            <p className="footer__text title">Let’s work together</p>
            <p className="footer__text main">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>
          </div>

          <div className="footer__img-gallery">
            {footerIno.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>

        <div className="text_fiels-gallery">
          {textFieldInfo.map((text, index) => (
            <TextField key={index} {...text} />
          ))}
          <div>
            <button className="footer__button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
