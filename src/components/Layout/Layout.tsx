import React from 'react';
import { LayoutStyles } from './LayoutStyles';

type LayoutProps = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};
