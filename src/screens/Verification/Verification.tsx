import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VerificationStyles } from './VerificationStyles';
import { Component_Logo, Component_Skeleton } from 'src/components';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { IMAGES } from 'src/assets/Images';

export const Verification = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const secret = import.meta.env.VITE_SECRET;

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <Component_Skeleton />
      ) : (
        <VerificationStyles>
          <Component_Logo color="blue-green" />
          <div>
            <img src={IMAGES.locker} alt="Locker Shadow" />
            <h2>
              {`No olvides cerrar tu casillero, hasta escuchar el click. `}
            </h2>
          </div>
          <Button
            shape="round"
            icon={<CaretRightOutlined />}
            onClick={() => navigate('/')}
            // size={'large'}
          >
            Terminar
          </Button>
        </VerificationStyles>
      )}
    </>
  );
};
