import { useState, useEffect } from "react";
import "./header.css";

const HeaderLogo = ({ text, href, onLinkClick }) => {
  return (
    <div className="headerLogo">
      <a id="logoLink" href={`#${href}`} onClick={onLinkClick}>
        {text}
      </a>
    </div>
  );
};

const HeaderItem = ({ text, kohde, onLinkClick }) => {
  return (
    <a href={`#${kohde}`} className="headerItem" onClick={onLinkClick}>
      {text}
    </a>
  );
};

const HeaderButton = ({ text, onLinkClick }) => {
  return (
    <a href="#lahjoita" className="headerButton" onClick={onLinkClick}>
      {text}
    </a>
  );
};

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!linkClicked) {
        const currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
          // Scrolling down
          setHeaderHidden(true); // Hide header
        } else {
          // Scrolling up
          setHeaderHidden(false); // Show header
        }
        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, linkClicked]);

  const handleLinkClick = () => {
    setLinkClicked(true);
    setHeaderHidden(true); // Hide header
    setTimeout(() => {
      setLinkClicked(false);
    }, 500); // Reset linkClicked after a delay to allow smooth hiding/showing of header
  };

  return (
    <div
      className="headerContainer"
      style={{ top: headerHidden ? "-100px" : "0" }}
    >
      <HeaderLogo
        text="Kurun lähetyskirppis"
        href="hero"
        onLinkClick={handleLinkClick}
      />
      <div className="links">
        <HeaderItem text="Tietoja" kohde="info" onLinkClick={handleLinkClick} />
        <HeaderItem
          text="Toiminta"
          kohde="toiminta"
          onLinkClick={handleLinkClick}
        />
        <HeaderButton text="Lahjoita" onLinkClick={handleLinkClick} />
      </div>
    </div>
  );
};

export default Header;
