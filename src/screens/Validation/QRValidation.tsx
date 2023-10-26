import { Input } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Component_Loader,
  Component_Logo,
  Component_Skeleton,
} from 'src/components';
import { QRValidationStyles } from './QRValidationStyles';
// import { IMAGES } from 'src/assets/Images';
// import Countdown from 'react-countdown';

// interface RenderTypes {
//   seconds: number;
//   completed: boolean;
// }

export const QRValidation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const code = event.target.value;
    setCode(code);
    if (code === state.codeOperation) {
      setTimeout(() => {
        navigate('/locker');
      }, 500);
    }
  };

  console.log(state.codeOperation);

  // Random component

  // Renderer callback with condition
  // const renderer = ({ seconds, completed }: RenderTypes) => {
  //   if (completed) {
  //     // Render a complete state
  //     return navigate('/scanner', { replace: true });
  //   } else {
  //     // Render a countdown
  //     return (
  //       <div
  //         style={{
  //           position: 'absolute',
  //           top: '17.5%',
  //           right: '40%',
  //           transform: 'translate(50%, -50%)',
  //           display: 'inline-flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //           gap: '10',
  //           width: '100px',
  //           border: 'thin solid #247DE1',
  //           borderRadius: '8px ',
  //         }}
  //       >
  //         <h2> {seconds > 10 ? seconds : `0${seconds}`}</h2>
  //         <h4>segundos</h4>
  //       </div>
  //     );
  //   }
  // };

  setTimeout(() => {
    setIsLoading(false);
  }, 750);

  return (
    <>
      {isLoading ? (
        <Component_Skeleton />
      ) : (
        <QRValidationStyles>
          <Component_Logo />
          <div className="container">
            <div>
              {/* <img
                onClick={() => navigate('/locker')}
                src={IMAGES.qr}
                alt="QR"
              /> */}
              {/* <h1>Ingrese el código para validar la reservación con ID:</h1> */}
              {/* <h3>{JSON.stringify(seedId)}</h3> */}
              {/* <Countdown
                date={Date.now() + Number(timer) * 1000}
                renderer={renderer}
              /> */}
            </div>

            <Input
              type="text"
              placeholder="Ingrese el código que recibió por correo"
              onChange={(e) => handleChange(e)}
              maxLength={6}
            />

            {/* {code !== state.codeOperation && (
              <>
                <Component_Loader />
              </>
            )} */}

            {/* {state.codeOperation?.length === 6 ? (
              <>
                <Component_Loader />
                <Input
                  type="text"
                  placeholder="Ingrese el código que recibió por correo"
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
            )} */}
          </div>
        </QRValidationStyles>
      )}
    </>
  );
};
