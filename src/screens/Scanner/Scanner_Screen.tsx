import { useState } from 'react';
import { Scanner } from '../../components/Scanner';
import { ScannerScreenStyles } from './ScannerStyles';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Skeleton } from 'antd';
import { IMAGES } from 'src/assets/Images/Images';
import { useNavigate } from 'react-router-dom';

export const Scanner_Screen: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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
          <div className="containerLoader">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />}
            />
          </div>
        </ScannerScreenStyles>
      ) : (
        <ScannerScreenStyles>
          <div className="container">
            <div onClick={() => navigate('/')}>
              <img src={IMAGES.logo} alt="Logo" />
            </div>
            <Scanner />
          </div>
        </ScannerScreenStyles>
      )}
    </>
  );
};
