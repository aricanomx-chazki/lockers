export const ASSETS = {
  header_form: new URL('../assets/Header_Intersect.svg', import.meta.url).href,
  footer_form: new URL('../assets/Footer_vector.svg', import.meta.url).href,
  logo: new URL('../assets/Logo_Chazki.svg', import.meta.url).href,
};

export const Scanner: React.FC = () => {
  return (
    <>
      <picture>
        <img src={ASSETS.header_form} alt="header_form" />
      </picture>
      <picture>
        <img src={ASSETS.logo} alt="header_form" />
      </picture>
      <h1>Bienvenid@</h1>
      <h2>¡Tu próxima aventura esta a un QR de distancia!</h2>
      <picture>
        <img src={ASSETS.footer_form} alt="footer_form" />
      </picture>
    </>
  );
};
