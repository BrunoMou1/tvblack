import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "/src/assets/logo.png";
import "./styles.scss";

export function Header() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">MFC</a>
            </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="contato">Contato</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="header__contato">
          <button>
            <span>Contato</span>
          </button>
        </div>
        <div className="header__button">
          <GiHamburgerMenu size={30} color="#fff" onClick={handleClicked} />
        </div>
      </div>
      {clicked && (
        <div className="header__menu-mobile">
          <ul>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">MFC</a>
            </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="contato">Contato</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
