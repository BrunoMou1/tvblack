import { useState, useEffect, useRef } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import "./styles.scss";

export function Perguntas() {
  const [perguntasL, setPerguntasL] = useState([]);
  const [perguntasR, setPerguntasR] = useState([]);
  async function loadPerguntas() {
    const response = await fetch("./perguntas.json");
    const { sectionLeft, sectionRight } = await response.json();
    setPerguntasL(sectionLeft);
    setPerguntasR(sectionRight);
  }

  useEffect(() => {
    loadPerguntas();
  }, []);

  function setPerguntaAbertoL(pergunta) {
    const perguntaAtiva = perguntasL.map((item) => {
      if (item.id === pergunta.id) {
        return { ...item, aberto: !item.aberto };
      }
      return item;
    });

    setPerguntasL(perguntaAtiva);
  }

  function setPerguntaAbertoR(pergunta) {
    const perguntaAtiva = perguntasR.map((item) => {
      if (item.id === pergunta.id) {
        return { ...item, aberto: !item.aberto };
      }
      return item;
    });

    setPerguntasR(perguntaAtiva);
  }

  const contentEl = useRef();

  return (
    <div className="perguntas">
      <div className="perguntas__title">
        <div></div>
        <h4>PERGUNTAS FREQUENTES</h4>
      </div>
      <div className="perguntas__subtitle">
        <h1>Leia as Perguntas Frequentes</h1>
      </div>

      <div className="perguntas__container">
        <div className="perguntas__content">
          {perguntasL.map((pergunta) => {
            return (
              <div
                className="content__item"
                key={pergunta.id}
                onClick={() => setPerguntaAbertoL(pergunta)}
              >
                <div className="item__header">
                  <div></div>
                  <h2>{pergunta.title}</h2>
                  {pergunta.aberto ? (
                    <BsArrowUpShort className="pergunta__arrow" />
                  ) : (
                    <BsArrowDownShort className="pergunta__arrow" />
                  )}
                </div>
                <div
                  ref={contentEl}
                  className={`item__description ${
                    pergunta.aberto ? "open" : ""
                  } `}
                  style={
                    pergunta.aberto
                      ? { height: contentEl.current.scrollHeight }
                      : { height: "0px" }
                  }
                  dangerouslySetInnerHTML={{ __html: pergunta.description }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="perguntas__content">
          {perguntasR.map((pergunta, index) => {
            return (
              <div
                className="content__item"
                key={pergunta.id}
                onClick={() => setPerguntaAbertoR(pergunta)}
              >
                <div className="item__header">
                  <div></div>
                  <h2>{pergunta.title}</h2>
                  {pergunta.aberto ? (
                    <BsArrowUpShort className="pergunta__arrow" />
                  ) : (
                    <BsArrowDownShort className="pergunta__arrow" />
                  )}
                </div>
                <div
                  ref={contentEl}
                  className={`item__description ${
                    pergunta.aberto ? "open" : ""
                  } `}
                  style={
                    pergunta.aberto
                      ? { height: contentEl.current.scrollHeight }
                      : { height: "0px" }
                  }
                  dangerouslySetInnerHTML={{ __html: pergunta.description }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
