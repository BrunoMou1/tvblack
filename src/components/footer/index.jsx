import "./styles.scss";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="" alt="logo" />
      </div>
      <div className="footer__atalhos">
        <div className="atalhos__left">
          <a href="#">Serviços</a>
          <a href="#">MFC</a>
          <a href="#">Planos</a>
        </div>
        <div className="atalhos__right">
          <a href="#">Revendedores</a>
          <a href="#">FAQ</a>
        </div>
      </div>
      <p>Copyright © 2020 BlackTV. All Rights Reserved.</p>
    </div>
  );
}
