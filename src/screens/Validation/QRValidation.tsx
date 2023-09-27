import { Input } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Component_Loader,
  Component_Logo,
  Component_Skeleton,
} from 'src/components';
import { QRValidationStyles } from './QRValidationStyles';
import { IMAGES } from 'src/assets/Images';

export const QRValidation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionId, seedId } = location.state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const token = event.target.value;
    setToken(token);
    if (token === sessionId) {
      setTimeout(() => {
        navigate('/show-locker');
      }, 500);
    }
  };

  // setTimeout(() => {
  //   navigate('/scanner');
  // }, 45000);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <QRValidationStyles>
          <Component_Skeleton />
        </QRValidationStyles>
      ) : (
        <QRValidationStyles>
          <Component_Logo />
          <div className="container">
            <div>
              <img
                onClick={() => navigate('/scanner')}
                src={IMAGES.qr}
                alt="QR"
              />
              <h1>Ingrese el código para validar la reservación con ID:</h1>
              <h3>{JSON.stringify(seedId)}</h3>
              <h3>{JSON.stringify(sessionId)}</h3>
            </div>

            {token.length === 6 && token !== sessionId ? (
              <>
                <Component_Loader />
                <Input
                  type="text"
                  placeholder="Ingrese el token que recibió por correo"
                  onChange={(e) => handleChange(e)}
                  maxLength={6}
                />
              </>
            ) : (
              <Input
                type="text"
                placeholder="Ingrese el token que recibió por correo"
                onChange={(e) => handleChange(e)}
                maxLength={6}
              />
            )}
          </div>
        </QRValidationStyles>
      )}
    </>
  );
};
