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
    mb: 'Montserrat-Black',
    mebold: 'Montserrat-ExtraBold',
    mbold: 'Montserrat-Bold',
    msb: 'Montserrat-SemiBold',
    mm: 'Montserrat-Medium',
    mr: 'Montserrat-Regular',
    ml: 'Montserrat-Light',
    mel: 'Montserrat-ExtraLight',
    mt: 'Montserrat-Thin',
  },
  screenSizes: {},
};

export const GlobalStyles = createGlobalStyle`

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

   &*,
  &::after,
  &::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }


  & html,
  & body,
  #root {
    height: 100%;
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    /* & ::-webkit-scrollbar {
      opacity:0;
    } */
  }

  & > html {
    height: 100vh;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  & > body {
    font-family: 'Montserrat-Regular';
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.mr};
  }

`;
