import { MdEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import "./styles.scss";

export function Contato() {
  return (
    <div className="contato" id="contato">
      <div className="contato__info">
        <div className="info__title">
          <div></div>
          <h4>CONTATO</h4>
        </div>
        <div className="info__subtitle">
          <h1>Entre em contato conosco</h1>
          <p>Se estiver com alguma dúvida, envie um e-mail ou um mensagem</p>
        </div>
        <div className="info__content">
          <p className="email">
            <MdEmail className="icon" />
            blacktv@gmail.com
          </p>
          <p className="youtube">
            <BsYoutube className="icon" />
            <a href="#">blacktv</a>
          </p>
        </div>
      </div>
      <div className="contato__form">
        <div className="form__title">
          <div></div>
          <h4>ENTRAR EM CONTATO</h4>
        </div>
        <div className="form__subtitle">
          <h1>Pronto Para Começar?</h1>
        </div>
        <form className="form__content">
          <input
            type="text"
            className="name"
            placeholder="Seu nome (obrigatório)"
          />
          <input
            type="email"
            className="email"
            placeholder="Seu email (obrigatório)"
          />
          <textarea className="message" />
          <button type="submit" className="form__button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
