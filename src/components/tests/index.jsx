import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import "./styles.scss";

export function Tests() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

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

  console.log(windowSize);

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
        {windowSize.innerWidth > 768 && (
          <>
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
          </>
        )}
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
      {windowSize.innerWidth < 768 && (
        <div className="box__aviso">
          <h1>Se deseja baixar o aplicativo para sua TV Box:</h1>
          <span>Opção 1:</span>
          <p>
            Acesse nossa página utilizando um computador, baixe e transfira o
            arquivo para um pen drive, instale em sua box a partir do mesmo.{" "}
          </p>
          <span>Opção 2: </span>
          <p>
            Acesse nossa página diretamente a partir de sua TV Box, baixe e
            instale o arquivo em seu aparelho.
          </p>
        </div>
      )}
      <div className="tests__video">
        <h1>VEJA COMO É FÁCIL USAR O BLUE TV</h1>
        <button className="video__button">
          <FaPlay className="video__icon" />
        </button>
      </div>
    </div>
  );
}
