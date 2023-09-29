import styled from 'styled-components';
import { IMAGES as IMAGE } from '../../assets/Images';

export const HomeScreenStyles = styled.main`
  height: 100vh;
  width: 100vw;
  & > .homeContainer {
    height: inherit;
    width: inherit;
    display: grid;
    grid-template-rows: 25% 45% 30%;
    & > :nth-child(1) {
      background-image: url(${IMAGE.header_form});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
      filter: drop-shadow(0rem 0.125rem 1rem rgba(47, 140, 252, 0.25));
    }
    & > :nth-child(2) {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      text-align: center;
      & > h1 {
        font-size: 2.75em;
        font-family: ${({ theme }) => theme.fonts.mel};
        color: ${({ theme }) => theme.palette.Black};
      }
      & > h2 {
        font-size: 1em;
        font-family: ${({ theme }) => theme.fonts.mt};
        color: ${({ theme }) => theme.palette.SecondaryCoolGray};
      }
    }
    & > :nth-child(3) {
      background-image: url(${IMAGE.footer_form});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
      position: relative;
      & > button {
        position: absolute;
        width: 20rem;
        height: 3.625rem;
        bottom: 0;
        right: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: grid;
        grid-template-columns: 80% 20%;
        align-items: center;
        justify-items: center;
        font-size: 1.25;
        font-family: ${({ theme }) => theme.fonts.MSBold};
        color: ${({ theme }) => theme.palette.White};
        border: none;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.palette.Black};
        box-shadow: 0px -8px 10px 0px rgba(51, 51, 51, 0.2) inset,
          0px 0px 26px 0px rgba(0, 0, 0, 0.25);
        & > span {
          transform: translate(35%, 0rem);
        }
        &:hover {
          box-shadow: 0px -8px 10px 0px rgba(51, 51, 51, 0.2) inset,
            0px 0px 26px 0px rgba(255, 255, 255, 0.25);
          cursor: pointer;
          & > span,
          svg {
            animation: hithere 1.5s ease infinite;
          }
        }
      }
    }
    @media (min-width: 440px) {
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
      box-shadow: 0px 0px 100px 1px rgba(136, 139, 141, 0.5);
      & > :nth-child(2) > h2 {
        padding: 0 2rem;
        font-size: 1.125em;
        font-family: ${({ theme }) => theme.fonts.MThin};
      }
    }
  }

  @keyframes hithere {
    30% {
      transform: scale(1.2);
    }
    40%,
    60% {
      transform: rotate(-20deg) scale(1.2);
    }
    50% {
      transform: rotate(20deg) scale(1.2);
    }
    70% {
      transform: rotate(0deg) scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
