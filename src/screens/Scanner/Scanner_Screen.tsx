import { Component_Logo, Component_Skeleton, Scanner } from 'src/components';
import { ScannerScreenStyles } from './ScannerStyles';
import { Skeleton } from 'antd';
import { useState } from 'react';

export const Scanner_Screen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <Component_Skeleton />
      ) : (
        <ScannerScreenStyles>
          <Component_Logo color="blue-green" />

          {showSkeleton ? (
            <Skeleton.Image
              style={{
                width: 300,
                height: 300,
              }}
              active={true}
            />
          ) : (
            <Scanner
              showQrModal={showQrModal}
              setShowQrModal={setShowQrModal}
              setSkeleton={setShowSkeleton}
              skeleton={showSkeleton}
            />
          )}
        </ScannerScreenStyles>
      )}
    </>
  );
};
