import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import "./styles.scss";

export function Tests() {
  return (
    <div className="tests">
      <div className="tests__title">
        <div></div>
        <h4>TESTE GRÁTIS POR SETE DIAS</h4>
        <div></div>
      </div>
      <h1 className="tests__title-subtitle">
        Aproveite o melhor do entretenimento do Brasil e do mundo a partir de
        qualquer box ou celular Android.
      </h1>
      <div className="tests__boxs">
        <div className="tests__box">
          <h4 className="box__title">TV BOX SEM LAUNCHER</h4>
          <p className="box__content">
            Se você possui uma tv box Android, baixe este aplicativo e tenha
            acesso ao melhor conteúdo na sua casa
          </p>
          <button className="box__button">
            <span>Teste Agora</span>
            <MdKeyboardArrowRight className="box__icon" />
          </button>
        </div>
        <div className="tests__box">
          <h4 className="box__title">TV BOX COM LAUNCHER</h4>
          <p className="box__content">
            Se você possui uma TV Box Android e quer ter uma experiência
            completa, baixe aqui nossa versão com launcher
          </p>
          <button className="box__button">
            <span>Teste Agora</span>
            <MdKeyboardArrowRight className="box__icon" />
          </button>
        </div>
        <div className="tests__box">
          <h4 className="box__title">APLICATIVO MÓVEL</h4>
          <p className="box__content">
            Se você possui um celular Android, baixe aqui o aplicativo para que
            aproveite a partir de qualquer lugar
          </p>
          <button className="box__button">
            <span>Teste Agora</span>
            <MdKeyboardArrowRight className="box__icon" />
          </button>
        </div>
      </div>
      <div className="tests__video">
        <h1>VEJA COMO É FÁCIL USAR O BLUE TV</h1>
        <button className="video__button">
          <FaPlay className="video__icon" />
        </button>
      </div>
    </div>
  );
}
