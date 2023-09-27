import { QrScanner } from '@yudiel/react-qr-scanner';
// import { useNavigate } from 'react-router-dom';

export const Scanner = () => {
  // const navigate = useNavigate();

  const handleDecode = (data: string) => {
    if (data.includes('https://lockers.chazki.com')) {
      const wrongId = data.split('?id=')[1];
      const seedId = wrongId.split('&')[0];
      const sessionId = data.split('&session=')[1];

      const secret = import.meta.env.VITE_SECRET;
      // const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
      // window.otplib.totp.option({
      //   digits: 6,
      //   epoch: 0,
      //   step: 30,
      //   window: 2,
      // });
      // const tokenOTP = window.otplib.totp.generate(secret);
      // const checkLocal = window.otplib.totp.check(tokenOTP, secret);
      // const checkChazki = window.otplib.totp.check(sessionId, secret);

      console.log({
        secret,
        seedId,
        sessionId,
        // tokenOTP,
        // checkLocal,
        // checkChazki,
      });
      // navigate(`/validation/`, {
      //   state: { seedId, sessionId },
      // });
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
