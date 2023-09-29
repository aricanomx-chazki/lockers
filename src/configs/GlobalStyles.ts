import { createGlobalStyle } from 'styled-components';

import MBlack from '../assets/Fonts/Montserrat-Black.ttf';
import MBold from '../assets/Fonts/Montserrat-Bold.ttf';
import MEBold from '../assets/Fonts/Montserrat-ExtraBold.ttf';
import MSBold from '../assets/Fonts/Montserrat-SemiBold.ttf';
import MMedium from '../assets/Fonts/Montserrat-Medium.ttf';
import MRegular from '../assets/Fonts/Montserrat-Regular.ttf';
import MLight from '../assets/Fonts/Montserrat-Light.ttf';
import MELight from '../assets/Fonts/Montserrat-ExtraLight.ttf';
import MThin from '../assets/Fonts/Montserrat-Thin.ttf';

export const theme = {
  palette: {
    Black: '#010616',
    Blue: '#247DE1',
    Green: '#44D62C',
    White: '#FFFFFF',
    LightBlue: '#9FD1FF',
    LightGreen: '#C5FFC2',
    SecondaryBlue: '#133D73',
    SecondaryCoolGray: '#888B8D',
    SecondaryGray: '#4E4E4E',
    SecondaryWhite: '#E5E5E5',
  },
  fonts: {
    MBlack: 'Montserrat-Black',
    MBold: 'Montserrat-ExtraBold',
    MEBold: 'Montserrat-Bold',
    MSBold: 'Montserrat-SemiBold',
    MMedium: 'Montserrat-Medium',
    MRegular: 'Montserrat-Regular',
    MLight: 'Montserrat-Light',
    MELight: 'Montserrat-ExtraLight',
    MThin: 'Montserrat-Thin',
  },
};

export const ResetGlobalStyles = createGlobalStyle`
  @font-face {
   font-family: 'Montserrat-Black';
   src: url(${MBlack}) format('truetype');
   font-style: normal;
   font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-Bold';
     src: url(${MBold}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-ExtraBold';
     src: url(${MEBold}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-ExtraLight';
     src: url(${MELight}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-Light';
     src: url(${MLight}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-Medium';
     src: url(${MMedium}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-Regular';
     src: url(${MRegular}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
     font-family: 'Montserrat-SemiBold';
     src: url(${MSBold}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }
  @font-face {
   font-family: 'Montserrat-Thin';
     src: url(${MThin}) format('truetype');
     font-style: normal;
     font-display: fallback;
   }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    font-family: ${({ theme }) => theme?.fonts.MRegular};
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
