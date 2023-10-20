import { QrScanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  showQrModal: boolean;
  setShowQrModal: (showQrModal: boolean) => void;
  skeleton: boolean;
  setSkeleton: (skeleton: boolean) => void;
}

const URL = 'https://chazki-qr.up.railway.app/validate';

export const Scanner = ({ setSkeleton }: Props) => {
  // const [data1, setData] = useState([]);
  const navigate = useNavigate();

  const handleGetValidation = (data: string) => {
    setSkeleton(true);

    if (data.includes('https://lockers.chazki.com')) {
      const wrongId = data.split('?id=')[1];
      const seedId = wrongId.split('&')[0];
      const token = data.split('&session=')[1].split('&remaining=')[0];
      const timer = data.split('&remaining=')[1];

      // console.log('seedId:', seedId, 'token:', token, 'timer:', timer);

      (async () => {
        await axios({
          method: 'get',
          url: `${URL}/${seedId}/${token}`,
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        })
          .then((res) => {
            if (res.status === 200) {
              navigate(`/validation/`, {
                state: { seedId, token, timer },
              });
            }
          })
          .catch((err) => console.warn(err))
          .finally(() => {
            // setSkeleton(false);
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
    </div>
  );
};
