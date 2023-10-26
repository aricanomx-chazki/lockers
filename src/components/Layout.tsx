import React from 'react';
import styled from 'styled-components';

export const LayoutStyles = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};
