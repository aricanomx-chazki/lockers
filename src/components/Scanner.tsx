import { QrScanner } from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router-dom';

export const Scanner = () => {
  const navigate = useNavigate();

  const handleDecode = (data: string) => {
    if (data.includes('https://lockers.chazki.com')) {
      const wrongId = data.split('?id=')[1];
      const seedId = wrongId.split('&')[0];
      const sessionId = data.split('&session=')[1];

      navigate(`/validation/`, {
        state: { seedId, sessionId },
      });
      console.log('Este es tu código de Chazki: ' + sessionId);
    } else {
      console.log('No es un código de Chazki');
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
        // onResult={(result) => console.log(result)}
        onDecode={(data) => handleDecode(data)}
        onError={(error) => console.log(error?.message)}
        viewFinderBorder={85}
        scanDelay={10000}
        tracker={false}
      />
    </div>
  );
};
