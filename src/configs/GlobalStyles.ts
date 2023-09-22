import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

  }
`;
