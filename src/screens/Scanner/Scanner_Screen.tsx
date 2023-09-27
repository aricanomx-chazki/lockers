import { useState } from 'react';
import {
  Component_Loader,
  Component_Logo,
  Component_Skeleton,
  Scanner,
} from 'src/components';
import { ScannerScreenStyles } from './ScannerStyles';

export const Scanner_Screen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const secret = import.meta.env.VITE_SECRET;

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <ScannerScreenStyles>
          <Component_Skeleton />
          <Component_Loader />
        </ScannerScreenStyles>
      ) : (
        <ScannerScreenStyles>
          <Component_Logo color="blue-green" />
          <Scanner />
        </ScannerScreenStyles>
      )}
    </>
  );
};
