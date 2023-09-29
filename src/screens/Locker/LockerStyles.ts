import styled from 'styled-components';

export const LockerStyles = styled.main`
  height: inherit;
  width: inherit;
  display: grid;
  grid-template-rows: 15% 1fr 15%;
  grid-template-columns: 1fr;
  & > :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > img {
      border-radius: 2rem;
      filter: drop-shadow(0rem 0.125rem 1rem rgba(68, 214, 44, 0.25));
      padding: 1rem;
    }
    & > h2 {
      padding: 0 2rem;
      font-family: ${({ theme }) => theme?.fonts.MMedium};
      font-size: 1.25rem;
      color: ${({ theme }) => theme?.palette?.SecondaryBlue};
      text-align: center;
    }
    /* border: 1px solid red; */
  }
  & > :nth-child(3) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.75rem;
    height: 3rem;
    &.ant-btn {
      background: linear-gradient(
        90deg,
        rgba(36, 125, 225, 1) 0%,
        rgba(68, 214, 44, 1) 100%
      );
      filter: drop-shadow(0rem 0.125rem 1rem rgba(68, 214, 44, 0.25));
      color: ${({ theme }) => theme?.palette?.White};
      font-family: ${({ theme }) => theme?.fonts.MMedium};
      &:hover {
        border: none;
        filter: drop-shadow(0rem 0.125rem 0.125rem #010616);
        color: ${({ theme }) => theme?.palette?.White};
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 440px) {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    box-shadow: 0px 0px 100px 1px rgba(136, 139, 141, 0.5);
  }
`;
