import { FaBackward } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { RiShareBoxFill } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";

import "./styles.scss";

export function Funcionalities() {
  return (
    <div className="funcionalities">
      <div className="funcionalities__left">
        <div className="funcionalities__container aside__left">
          <FaBackward size={38} />
          <h2>Função Playback</h2>
          <p>Assista a programação de até 7 dias atrás</p>
        </div>
        <div className="funcionalities__container">
          <BsEyeSlashFill size={38} />
          <h2>Controle Parental e Bloqueio</h2>
          <p>Acesse ou bloqueie conteúdos +18 na sua lista de canais</p>
        </div>
        <div className="funcionalities__container aside__left">
          <AiFillDollarCircle size={38} />
          <h2>Aproveite 7 Dias Grátis</h2>
          <p>
            Teste primeiro: baixe o aplicativo agora e use sem custos durante 7
            dias
          </p>
        </div>
      </div>
      <div className="funcionalities__right">
        <div className="funcionalities__container aside__right">
          <BiCalendar size={38} />
          <h2>Função EPG e Lembrete</h2>
          <p>
            Com o EPG, você pode ativar a função lembrete para não esquecer
            nenhum programa
          </p>
        </div>
        <div className="funcionalities__container">
          <RiShareBoxFill size={38} />
          <h2>Launcher exclusivo</h2>
          <p>
            Não perca as melhores novidades e sugestões disponibilizadas em
            nosso launcher exclusivo
          </p>
        </div>
        <div className="funcionalities__container aside__right">
          <GoTasklist size={38} />
          <h2>Função Favoritos</h2>
          <p>Crie uma lista personalizada com seus canais favoritos</p>
        </div>
      </div>
    </div>
  );
}
