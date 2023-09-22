import React from 'react';
import { IMAGES as IMAGE } from '../assets/Images/Images';

export const Home: React.FC = () => {
  return (
    <>
      <picture>
        <img src={IMAGE.header_form} alt="header_form" />
      </picture>
      <picture>
        <img src={IMAGE.logo} alt="header_form" />
      </picture>
      <h1>Bienvenid@</h1>
      <h2>¡Tu próxima aventura esta a un QR de distancia!</h2>
      <picture>
        <img src={IMAGE.footer_form} alt="footer_form" />
      </picture>
    </>
  );
};
