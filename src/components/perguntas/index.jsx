import { useState, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import "./styles.scss";
import { PerguntaItemEsq } from "../perguntaItemEsq";
import { PerguntaItemDir } from "../PerguntaItemDir";

const GET_PERGUNTAS_QUERY = gql`
  query MyQuery {
    perguntaDireitas {
      title
      description {
        html
        text
      }
    }
    perguntaEsquerdas {
      title
      description {
        html
        text
      }
    }
  }
`;

export function Perguntas() {
  const [clickedEsq, setClickedEsq] = useState("0");
  const [clickedDir, setClickedDir] = useState("0");
  const { data } = useQuery(GET_PERGUNTAS_QUERY);

  const handleToggleEsq = (index) => {
    if (clickedEsq === index) {
      return setClickedEsq("0");
    }
    setClickedEsq(index);
  };

  const handleToggleDir = (index) => {
    if (clickedDir === index) {
      return setClickedDir("0");
    }
    setClickedDir(index);
  };

  return (
    <div className="perguntas">
      <div className="perguntas__title">
        <div></div>
        <h4>FAQ</h4>
      </div>
      <div className="perguntas__subtitle">
        <h1>Leia As Perguntas Frequentes</h1>
      </div>

      <div className="perguntas__container">
        <div className="perguntas__content">
          {data?.perguntaEsquerdas.map((pergunta, index) => {
            return (
              <PerguntaItemEsq
                key={index}
                title={pergunta.title}
                onToggle={() => handleToggleEsq(index)}
                active={clickedEsq === index}
                description={pergunta.description}
              />
            );
          })}
        </div>
        <div className="perguntas__content">
          {data?.perguntaDireitas.map((pergunta, index) => {
            return (
              <PerguntaItemDir
                key={index}
                onToggle={() => handleToggleDir(index)}
                title={pergunta.title}
                active={clickedDir === index}
                description={pergunta.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
