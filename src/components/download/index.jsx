import { BsArrowRightShort } from "react-icons/bs";

import "./styles.scss";

export function Download() {
  return (
    <>
      <div className="download">
        <div className="download__text">
          <ul>
            <li>BEM VINDO</li>
          </ul>
          <h1>
            Baixe a BlackTV GRATIS POR 7 DÍAS
          </h1>
          <p>
            Aproveite o melhor aplicativo de TV a partir de sua box ou celular
            Android. <a href="#">Ver mais</a>
          </p>
        </div>
        <div className="download__buttons">
          <button className="download__button button__box">
            <div></div>
            <span>TV BOX</span>
            <BsArrowRightShort className="button__icon" />
          </button>
          <button className="download__button button__movel">
            <div></div>
            <span>MÓVEL</span>
            <BsArrowRightShort className="button__icon" />
          </button>
        </div>
      </div>
    </>
  );
}
