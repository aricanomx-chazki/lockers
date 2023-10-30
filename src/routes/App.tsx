import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  QRValidation,
  Scanner_Screen,
  Verification,
  Locker,
  Home,
} from '../screens';
import { ResetGlobalStyles, theme } from '../configs/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { LayoutComponent, Component_Loader } from 'src/components';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback={<Component_Loader />}>
      <ThemeProvider theme={theme}>
        <ResetGlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/scanner/:id"
              element={
                <LayoutComponent>
                  <Scanner_Screen />
                </LayoutComponent>
              }
            />
            <Route
              path="/locker"
              element={
                <LayoutComponent>
                  <Locker />
                </LayoutComponent>
              }
            />
            <Route
              path="/validation"
              element={
                <LayoutComponent>
                  <QRValidation />
                </LayoutComponent>
              }
            />
            <Route
              path="/verification/"
              element={
                <LayoutComponent>
                  <Verification />
                </LayoutComponent>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};
