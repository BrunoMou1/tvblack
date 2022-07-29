import "./styles.scss";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo"></div>
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
      </div>
    </>
  );
}
