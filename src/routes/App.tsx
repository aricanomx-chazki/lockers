import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Scanner_Screen } from '../screens';
import { GlobalStyles, theme } from '../configs/GlobalStyles';

import { ThemeProvider } from 'styled-components';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner_Screen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
