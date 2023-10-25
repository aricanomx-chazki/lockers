import styled from 'styled-components';

export const LoaderStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  & .ant-spin-dot {
    color: ${({ theme }) => theme.palette.Green};
    filter: drop-shadow(0rem 0.125rem 1rem rgba(47, 140, 252, 1));
  }
`;
