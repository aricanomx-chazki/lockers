import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Component_Logo, Component_Skeleton } from 'src/components';
import { IMAGES } from 'src/assets/Images';
import { LockerStyles } from './LockerStyles';

export const Locker = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const secret = import.meta.env.VITE_SECRET;

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <>
      {isLoading ? (
        <Component_Skeleton />
      ) : (
        <LockerStyles>
          <Component_Logo color="blue-green" />
          <div>
            <img src={IMAGES.clip} alt="Clip" />
            <h2>
              {`¡Tu casillero se ha abierto con éxito!`}
              <br />
              {`Ahora puedes retirar tu producto`}
            </h2>
          </div>
          <Button
            shape="round"
            icon={<CaretRightOutlined />}
            onClick={() => navigate('/verification')}
            // size={'large'}
          >
            Continuar
          </Button>
        </LockerStyles>
      )}
    </>
  );
};
