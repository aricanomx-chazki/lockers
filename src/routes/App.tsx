import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Scanner } from '../screens';
import { GlobalStyles } from '../configs/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
