import { BsArrowRightShort } from "react-icons/bs";
import Logo from "/src/assets/logo.png";
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
          <div className="plano__standart">BLACK MENSAL</div>
          <img src={Logo} alt="logo" />
          <h4 className="box__title">30 DIAS</h4>
          <p className="box__subtitle">Plano Mensal 30 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para TV BOX</li>
              <li>• App para smart Android TV</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>ESCOLHER</span>
            <BsArrowRightShort className="button__icon" />
          </button>
        </div>
        <div className="planos__box">
          <div className="plano__standart">BLACK ANUAL</div>
          <img src={Logo} alt="logo" />
          <h4 className="box__title">365 DIAS</h4>
          <p className="box__subtitle">Plano Anual 365 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para TV BOX</li>
              <li>• App para smart Android TV</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>ESCOLHER</span>
            <BsArrowRightShort className="button__icon" />
          </button>
        </div>
        <div className="planos__box">
          <div className="plano__standart">DUAL BLACK MENSAL</div>
          <img src={Logo} alt="logo" />
          <h4 className="box__title">30 DIAS</h4>
          <p className="box__subtitle">Plano Mensal 30 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para TV BOX</li>
              <li>• App para smart Android TV</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• Dois dispositivos simultaneamente</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>ESCOLHER</span>
            <BsArrowRightShort className="button__icon" />
          </button>
        </div>
        <div className="planos__box">
          <div className="plano__standart">DUAL BLACK ANUAL</div>
          <img src={Logo} alt="logo" />
          <h4 className="box__title">365 DIAS</h4>
          <p className="box__subtitle">Plano Anual 365 dias</p>
          <div className="box__divider">.</div>
          <div className="box__content">
            <ul>
              <li>• Conteúdo televisivo</li>
              <li>• App para TV BOX</li>
              <li>• App para smart Android TV</li>
              <li>• App para smartphone Android</li>
              <li>• Playback e UHD</li>
              <li>• Dois dispositivos simultaneamente</li>
              <li>• 7 dias grátis com o Blue App (para novos usuários)</li>
            </ul>
          </div>
          <button className="planos__button">
            <span>ESCOLHER</span>
            <BsArrowRightShort className="button__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
