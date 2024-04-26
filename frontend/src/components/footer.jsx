import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerVasenteksti">
        {" "}
        <a
          className="bodyText"
          id="oikea"
          href="https://www.facebook.com/KurunLahetyskirppis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="red">Ota </span>
          Facebook-sivumme seurantaan – <span className="red">Pysyt</span> ajan
          tasalla uusimmista ilmoituksistamme!
        </a>
      </div>
      <div className="footerOikeateksti">
        <p className="bodyText"> © 2024 Kurun Lähetyseura</p>
        <p className="bodyText"> Virastotie 1-3, 34300</p>
      </div>
    </div>
  );
};

export default Footer;
