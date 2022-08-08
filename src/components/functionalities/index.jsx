import { FaRegShareSquare } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FaChromecast } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import Functions from "/src/assets/Functions.png"

import "./styles.scss";

export function Funcionalities() {
  return (
    <div className="funcionalities">
      <div className="funcionalities__left">
        <div className="funcionalities__container aside__left">
          <FaRegShareSquare size={40} />
          <h2>Função Playback</h2>
          <p>Assista a programação de até 7 dias atrás</p>
        </div>
        <div className="funcionalities__container">
          <FaRegEyeSlash size={40} />
          <h2>Controle Parental e Bloqueio</h2>
          <p>Acesse ou bloqueie conteúdos +18 na sua lista de canais</p>
        </div>
        <div className="funcionalities__container aside__left">
          <FaRegGem size={40} weight="light" />
          <h2>Aproveite 7 Dias Grátis</h2>
          <p>
            Teste primeiro: baixe o aplicativo agora e use sem custos durante 7
            dias
          </p>
        </div>
      </div>
      <img src={Functions} alt="funcionalities" />
      <div className="funcionalities__right">
        <div className="funcionalities__container aside__right">
          <BiCalendar size={40} />
          <h2>Função EPG e Lembrete</h2>
          <p>
            Com o EPG, você pode ativar a função lembrete para não esquecer
            nenhum programa
          </p>
        </div>
        <div className="funcionalities__container">
          <FaChromecast size={40} />
          <h2>Launcher exclusivo</h2>
          <p>
            Não perca as melhores novidades e sugestões disponibilizadas em
            nosso launcher exclusivo
          </p>
        </div>
        <div className="funcionalities__container aside__right">
          <FaStream size={40} />
          <h2>Função Favoritos</h2>
          <p>Crie uma lista personalizada com seus canais favoritos</p>
        </div>
      </div>
    </div>
  );
}
