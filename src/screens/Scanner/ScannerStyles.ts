import styled from 'styled-components';

export const ScannerScreenStyles = styled.main`
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
    display: grid;
    align-items: center;
    place-self: center;
  }
  @media (min-width: 440px) {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    box-shadow: 0px 0px 100px 1px rgba(136, 139, 141, 0.5);
  }
`;
