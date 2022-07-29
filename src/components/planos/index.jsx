import { MdFileDownload } from "react-icons/md";

import "./styles.scss";

export function Planos() {
  return (
    <div className="planos">
      <div className="planos__title">
        <div></div>
        <h4>ESCOLHA SEU PLANO</h4>
        <div></div>
      </div>
      <div className="planos__subtitle">
        <h1>Planos Completos e Flexíveis</h1>
        <p>Para cada pessoa, um plano diferente</p>
      </div>
      <div className="planos__boxs">
        <div className="planos__box">
          <div className="plano__standart">Plano Mensal</div>
          <h4 className="box__title">30 DIAS</h4>
          <p className="box__subtitle">Plano Anuel 30 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>TV BOX</span>
            <MdFileDownload className="button__icon" />
          </button>
        </div>
        <div className="planos__box">
          <div className="plano__standart">Plano Anual</div>
          <h4 className="box__title">365 DIAS</h4>
          <p className="box__subtitle">Plano Anuel 365 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>TV BOX</span>
            <MdFileDownload className="button__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
