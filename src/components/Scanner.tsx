import axios from 'axios';
import { QrScanner } from '@yudiel/react-qr-scanner';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

interface Props {
  showQrModal: boolean;
  setShowQrModal: (showQrModal: boolean) => void;
  codeOperation: string | null;
}

export const Scanner = ({ codeOperation }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const handleGetValidation = (data: string) => {
    if (data.includes('https://lockers.up.railway.app/')) {
      console.log('data', data);
      const wrongId = data.split('?id=')[1];
      const id = wrongId.split('&')[0];
      const token = data.split('&session=')[1].split('&remaining=')[0];
      const remaining = data
        .split('&remaining=')[1]
        .split('&codeOperation=')[0];

      (async () => {
        await axios({
          method: 'get',
          url: `https://chazki-qr.up.railway.app/validate/${id}/${token}`,
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        })
          .then(() => {
            navigate(`/validation`, {
              state: { id, token, remaining, codeOperation },
            });
          })
          .catch((err) => console.warn(err));
      })();
    }
    //   }
  };

  return (
    <div
      style={{
        height: '95%',
        width: '95%',
        padding: '0',
        margin: '0',
      }}
    >
      <QrScanner
        // constraints?: MediaTrackConstraints;
        // containerStyle?: CSSProperties;
        // deviceId?: string;
        // hideCount?: boolean;
        // hints?: Map<DecodeHintType, any>;
        // onDecode?: (result: string) => void;
        // onError: OnErrorFunction;
        // onResult?: OnResultFunction;
        // scanDelay?: number;
        // tracker?: boolean;
        // videoStyle?: CSSProperties;
        // viewFinder?: (props: any) => ReactElement | null;
        // viewFinderBorder?: number;
        // ++++++++++++++++++
        // constraints={{ facingMode: 'environment' }}
        containerStyle={{
          borderRadius: '1rem',
        }}
        videoStyle={{
          borderRadius: '1rem',
        }}
        // hideCount={false}
        onDecode={(data) => handleGetValidation(data)}
        onError={(error) => console.log(error?.message)}
        // onResult={(result) => console.log(result)}
        viewFinderBorder={85}
        scanDelay={5000}
        // tracker={true}
      />
      {search !== undefined && (
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.25rem',
            color: '#133D73',
          }}
        >
          Escanea el QR que aparece en la pantalla del locker.
        </h1>
      )}
    </div>
  );
};
