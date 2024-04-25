import "./toiminta.css";

const Kohde = ({ otsikko, kuvaus }) => {
  return (
    <div className="kohde">
      <h1>{otsikko}</h1>
      <p>{kuvaus}</p>
    </div>
  );
};

const Toiminta = () => {
  return (
    <div className="toiminta">
      <h1 className="otsikko" id="toimintaOtsikko">
        Tuottojen <span className="red"> lahjoituskohteet</span>
      </h1>
      <Kohde
        otsikko="Suomenlähetysseura ry"
        kuvaus="Suomenlähetysseura ry , on Suomen suurin kehitysyhteistyöjärjestö ja toiseksi suurin humanitaarisen avun antaja. Se on perustettu vuonna 1859, ja sen toiminta keskittyy erityisesti koulutuksen, rauhanrakentamisen ja köyhyyden vähentämisen kaltaisiin toimintoihin eri puolilla maailmaa."
      />
      <Kohde
        otsikko="Lähetysyhdistys kylväjä ry"
        kuvaus="Lähetysyhdistys Kylväjä on suomalainen kristillinen järjestö, joka keskittyy lähetystyöhön ja kristinuskon levittämiseen eri puolilla maailmaa."
      />
      <Kohde
        otsikko="muut Kurun kappeliseurakunnan valitsemat lähetyskohteet"
        kuvaus="Kurun kappeliseurakunnan lähetystoimikunta valitsee huolellisesti kohteet, jotka saavat tukea seurakuntamme kirpputoritoiminnasta, varmistaen, että apu menee sinne, missä sitä eniten tarvitaan."
      />
    </div>
  );
};

export default Toiminta;
