import { MdFileDownload } from "react-icons/md";

import "./styles.scss";
import { BiRightArrowAlt } from "react-icons/bi";

export function Download() {
  return (
    <>
      <div className="download">
        <ul>
          <li>BEM VINDO</li>
        </ul>
        <div className="download__text">
          <h1>
            Baixe a BlackTV <br /> GRATIS POR 7 DÍAS
          </h1>
          <p>
            Aproveite o melhor aplicativo de TV a partir de sua box ou celular
            Android.
          </p>
          <a href="#">
            Ler mais
            <BiRightArrowAlt />
          </a>
        </div>
        <div className="download__buttons">
          <button className="download__button button__box">
            <span>TV BOX</span>
            <MdFileDownload className="button__icon" />
          </button>
          <button className="download__button button__movel">
            <span>MÓVEL</span>
            <MdFileDownload className="button__icon" />
          </button>
        </div>
      </div>
    </>
  );
}
