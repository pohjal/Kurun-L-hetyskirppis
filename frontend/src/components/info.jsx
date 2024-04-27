import "./info.css";

const Info = () => {
  return (
    <div className="info" id="info">
      <div>
        <h1 className="otsikko" id="infoOtsikko">
          Tietoa meistä
        </h1>
      </div>
      <div className="infoContainer">
        <div className="infoItem">
          <p className="bodyText">
            Me olemme Kurun kappeliseurakunnan ylläpitämä hyväntekeväisyys-
            kirpputori
          </p>
        </div>
        <div className="borderItem"></div>
        <div className="infoItem">
          <p className="bodyText">
            Toimintamme on jatkunut jo yli 20-vuotta vapaaehtoistyönä
          </p>
        </div>
        <div className="borderItem"></div>
        <div className="infoItem">
          <p className="bodyText">
            Kirpputorilla myytävät tuotteet saadaan lahjoituksina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
