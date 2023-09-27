import { useState } from 'react';
import { Scanner } from '../../components/Scanner';
import { ScannerScreenStyles } from './ScannerStyles';
import { Skeleton } from 'antd';
import { Component_Logo } from 'src/components/Logo';
import { Component_Loader } from 'src/components/Loader';

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
          <div className="container">
            <Skeleton.Input
              active={true}
              style={{
                width: 200,
                height: 51,
                marginBottom: 20,
              }}
            />
            <Skeleton.Image
              style={{
                width: 300,
                height: 300,
              }}
              active={true}
            />
          </div>
          <Component_Loader />
          {/* <div className="containerLoader">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />}
            />
          </div> */}
        </ScannerScreenStyles>
      ) : (
        <ScannerScreenStyles>
          <div className="container">
            {/* <div onClick={() => navigate('/')}>
              <img src={IMAGES.logos.blue_green} alt="Chazki Logo" />
            </div> */}
            <Component_Logo color="blue-green" />
            {/* <Component_Logo color="black" /> */}
            <Scanner />
          </div>
        </ScannerScreenStyles>
      )}
    </>
  );
};
