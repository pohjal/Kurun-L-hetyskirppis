import "./header.css";

const HeaderLogo = ({ text }) => {
  return <div className="headerLogo"> {text}</div>;
};

const HeaderItem = ({ text }) => {
  return <div className="headerItem"> {text}</div>;
};

const HeaderButton = ({ text }) => {
  return <button className="headerButton">{text}</button>;
};

const Header = () => {
  return (
    <div className="headerContainer">
      <HeaderLogo text="Kurun lähetyskirppis" />
      <div className="links">
        <HeaderItem text="Tietoja" />
        <HeaderItem text="Toiminta" />
        <HeaderButton text="Lahjoita" />
      </div>
    </div>
  );
};

export default Header;
