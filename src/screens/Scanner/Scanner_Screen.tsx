import { useState } from 'react';
import { Component_Logo, Component_Skeleton, Scanner } from 'src/components';
import { ScannerScreenStyles } from './ScannerStyles';
import { Skeleton } from 'antd';

export const Scanner_Screen: React.FC = () => {
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

          {/* {showQrModal ? (
            <Scanner
              showQrModal={showQrModal}
              setShowQrModal={setShowQrModal}
              setSkeleton={setSkeleton}
              skeleton={skeleton}
            />
          ) : (
            <>
              <Skeleton.Image
                style={{
                  width: 300,
                  height: 300,
                }}
                active={true}
              />
              <button onClick={() => setShowQrModal(true)}>Scann again</button>
            </>
          )} */}
        </ScannerScreenStyles>
      )}
    </>
  );
};
