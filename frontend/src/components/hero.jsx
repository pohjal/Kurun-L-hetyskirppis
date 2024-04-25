import "./hero.css";

const Vasen = () => {
  return (
    <div className="vasenContainer">
      <h1 className="otsikko">
        TERVETULOA TEKEMÄÄN<span className="red"> LÖYTÖJÄ!</span>
      </h1>
      <p className="bodyText"> Virastotie 1-3, 34300</p>
      <p className="bodyText">Aukioloajat touko-syyskuun pe-La klo 15-19</p>
    </div>
  );
};

const Oikea = () => {
  return (
    <div className="oikeaContainer">
      <img
        className="picture"
        src="/images/kirppis.jpeg"
        alt="kuva kirpputorista"
      />
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
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <Vasen />
      <Oikea />
    </div>
  );
};

export default Hero;
