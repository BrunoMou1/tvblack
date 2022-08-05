import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./styles.scss";

export function Instrucoes() {
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

  return (
    <div className="instrucoes">
      <div className="instrucoes__title">
        <div></div>
        <h4>COMO USAR BLACK TV</h4>
      </div>
      <div className="instrucoes__subtitle">
        <h1>Como funciona o BlackTV?</h1>
        <p>Está com dúvidas? Saiba como solucioná-las nesses tutoriais</p>
      </div>
      <div className="instrucoes__content">
        <div className="content__item">
          <div className="item__thumb"></div>
          <div className="item__description__instrucoes">
            <h2>Função Favoritos</h2>
            <p>
              Guia do Usuário – Função Favoritos Aprenda a usar a função
              “FAVORITOS” em seu...
            </p>
            {windowSize.innerWidth > 768 && (
              <a href="#">
                VEJA
                <BsArrowRight size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="content__item">
          <div className="item__thumb"></div>
          <div className="item__description__instrucoes">
            <h2>Função Favoritos</h2>
            <p>
              Guia do Usuário – Função Favoritos Aprenda a usar a função
              “FAVORITOS” em seu...
            </p>
            {windowSize.innerWidth > 768 && (
              <a href="#">
                VEJA
                <BsArrowRight size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="content__item">
          <div className="item__thumb"></div>
          <div className="item__description__instrucoes">
            <h2>Função Favoritos</h2>
            <p>
              Guia do Usuário – Função Favoritos Aprenda a usar a função
              “FAVORITOS” em seu...
            </p>
            {windowSize.innerWidth > 768 && (
              <a href="#">
                VEJA
                <BsArrowRight size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
