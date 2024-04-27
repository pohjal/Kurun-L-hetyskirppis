import "./lahjoita.css";

const Lahjoita = () => {
  return (
    <div className="lahjoita" id="lahjoita">
      <div className="vasenPuoli">
        <h1 className="otsikko">
          Voit nyt myös <span className="red">tukea</span> toimintaa
          <span className="red"> lahjoittamalla</span>
        </h1>
      </div>
      <div className="oikeaPuoli">
        <img className="MPKuva" src="/images/mobilepay.png" alt="" />
      </div>
    </div>
  );
};

export default Lahjoita;
