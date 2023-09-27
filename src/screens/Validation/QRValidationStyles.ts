import styled from 'styled-components';

export const QRValidationStyles = styled.main`
  height: inherit;
  width: inherit;
  display: grid;
  grid-template-rows: 15% 1fr 15%;
  & > :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > img {
        border-radius: 2rem;
        box-shadow: 0px 0px 10px 0px rgba(47, 140, 252, 0.25) inset,
          0px 0px 5px 0px rgba(47, 140, 252, 0.25);
        margin-bottom: 1rem;
      }
      & > h1 {
        font-size: 1.75em;
        font-family: ${({ theme }) => theme.fonts.MSBold};
        margin-bottom: 1rem;
      }
      & > h3:first-of-type {
        color: ${({ theme }) => theme.palette.Blue};
        font-size: large;
      }
    }
    & .ant-input {
      /* border: 1px solid red; */
      font-size: 1.25rem;
      height: 80px;
    }
  }
  @media (min-width: 440px) {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    box-shadow: 0px 0px 100px 1px rgba(136, 139, 141, 0.5);
  }
`;
