import { useNavigate } from 'react-router-dom';
import { IMAGES } from 'src/assets/Images';

interface props {
  color: string;
}
export const Component_Logo = ({ color }: props) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')}>
      <img
        src={(() => {
          switch (color) {
            case 'black':
              return IMAGES.logos.black;
            case 'white':
              return IMAGES.logos.white;
            case 'white-green':
              return IMAGES.logos.white_green;
            case 'blue-green':
              return IMAGES.logos.blue_green;
            case 'gray':
              return IMAGES.logos.gray;
            default:
              return IMAGES.logos.blue_green;
          }
        })()}
        alt="Chazki Logo"
      />
    </div>
  );
};
