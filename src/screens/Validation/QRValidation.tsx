import { Input } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Component_Loader, Component_Logo } from 'src/components';

export const QRValidation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionId, seedId } = location.state;
  const [token, setToken] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const token = event.target.value;
    setToken(token);
    if (token === sessionId) {
      setTimeout(() => {
        navigate('/show-locker');
      }, 500);
    }
  };

  setTimeout(() => {
    navigate('/scanner');
  }, 30000);

  return (
    <div>
      {token.length === 6 && token !== sessionId ? <Component_Loader /> : null}
      <div className="container">
        <Component_Logo color="blue_green" />
        <h1>Ingrese el token para validar la reservación con ID:</h1>
        <h3>{JSON.stringify(sessionId)}</h3>
        <h3>{JSON.stringify(seedId)}</h3>
        <Input
          placeholder="Ingrese el token que recibió por correo"
          onChange={(e) => handleChange(e)}
          maxLength={6}
        />
      </div>
    </div>
  );
};
