import styled from 'styled-components';

export const ScannerScreenStyles = styled.main`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: grid;
  place-self: center;
  position: relative;
  & > .containerLoader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    /* anticon anticon-loading anticon-spin ant-spin-dot */
    f & .ant-spin-dot {
      color: ${({ theme }) => theme.palette.Green};
      filter: drop-shadow(0rem 0.125rem 1rem rgba(47, 140, 252, 1));
    }
  }
  & > .container {
    height: inherit;
    width: inherit;
    display: grid;
    grid-template-rows: 15% 1fr 15%;
    & > :nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid red; */
    }
  }
  @media (min-width: 440px) {
    display: flex;
    width: 480px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
  }
  /* & .container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    & img {
      width: 100%;
      margin: none;
      padding: none;
    }
    & picture {
      border: none;
      margin: none;
      padding: none;
      filter: drop-shadow(0rem 0.125rem 1rem rgba(47, 140, 252, 0.25));
    }
    & > :nth-child(2) {
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      justify-content: center;
      align-items: center;
      text-align: center;
      & h1 {
        font-size: 2.75em;
      }
      & h2 {
        padding: 0 1rem;
        font-size: 1em;
      }
    }
    .ImageLogo {
      width: 12.5rem;
    }
  }
  @media (min-width: 440px) {
    display: flex;
    width: 480px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    background-color: green;
  } */
`;
