import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, QRValidation, Scanner_Screen, Verification } from '../screens';
import { ResetGlobalStyles, theme } from '../configs/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { Layout } from 'src/components/Layout';
import { Locker } from 'src/screens/Locker/Locker';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetGlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/scanner"
              element={
                <Layout>
                  <Scanner_Screen />
                </Layout>
              }
            />
            <Route
              path="/validation"
              element={
                <Layout>
                  <QRValidation />
                </Layout>
              }
            />
            <Route
              path="/locker"
              element={
                <Layout>
                  <Locker />
                </Layout>
              }
            />
            <Route
              path="/verification"
              element={
                <Layout>
                  <Verification />
                </Layout>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
