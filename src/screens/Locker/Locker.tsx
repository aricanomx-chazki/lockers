import { Component_Logo } from 'src/components';
import { LockerStyles } from './LockerStyles';
import { IMAGES } from 'src/assets/Images';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

export const Locker = () => {
  return (
    <LockerStyles>
      <Component_Logo />
      <div>
        <img src={IMAGES.clip} alt="Clip" />
        <h2>
          {`¡Tu casillero se ha abierto con éxito!`}
          <br />
          {`Ahora puedes retirar tu producto`}
        </h2>
      </div>
      <Button
        type="primary"
        shape="round"
        icon={<CaretRightOutlined />}
        // size={'large'}
      >
        Continuar
      </Button>
    </LockerStyles>
  );
};
