import styled from 'styled-components';

export const LayoutStyles = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
`;

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};
