import axios from 'axios';
import { QrScanner } from '@yudiel/react-qr-scanner';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  showQrModal: boolean;
  setShowQrModal: (showQrModal: boolean) => void;
  skeleton: boolean;
  setSkeleton: (skeleton: boolean) => void;
}

export const Scanner = ({ setSkeleton }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const handleGetValidation = (data: string) => {
    setSkeleton(true);

    if (data.includes('https://lockers.up.railway.app/')) {
      const wrongId = data.split('?id=')[1];
      const seedId = wrongId.split('&')[0];
      const token = data.split('&session=')[1].split('&remaining=')[0];
      const timer = data.split('&remaining=')[1].split('&codeOperation=')[0];
      const codeOp = data.split('&codeOperation=')[1];

      console.log('codeOp', codeOp);

      (async () => {
        await axios({
          method: 'get',
          url: `https://chazki-qr.up.railway.app/validate/${seedId}/${token}`,
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        })
          .then((res) => {
            if (
              res.status === 200 &&
              codeOp === search.split('?codeOperation=')[1]
            ) {
              navigate(`/locker`, {
                state: {
                  seedId,
                  token,
                  timer,
                  codeOp,
                },
              });
            }
            if (res.status === 200 && search.length === 0) {
              navigate(`/validation`, {
                state: { seedId, token, timer, codeOperation: codeOp },
              });
            }
          })
          .catch((err) => console.warn(err))
          .finally(() => {
            setTimeout(() => {
              setSkeleton(false);
            }, 500);
          });
      })();
    }
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
      {/* <QrScanner
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
      /> */}
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
