import { BiMailSend } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineFileImage } from "react-icons/ai";
import "./styles.scss";

export function Contato() {
  return (
    <div className="contato">
      <div className="contato__info">
        <div className="contato__container">
          <div className="info__title">
            <div></div>
            <h4>CONTATO</h4>
          </div>
          <div className="info__subtitle">
            <h1>Revendedores</h1>
            <p>Se estiver com alguma dúvida, envie um e-mail ou um mensagem</p>
          </div>
          <div className="info__content">
            <div className="email">
              <BiMailSend size={40} color="#fff" />
              <div>
                <span>EMAIL:</span>
                <p>blacktvcontato@gmail.com</p>
              </div>
            </div>
            <div className="youtube">
              <BsYoutube size={40} color="#fff" />
              <div>
                <span>YOUTUBE:</span>
                <a href="#">BlackTV Live</a>
              </div>
            </div>
            <div className="revedendores">
              <AiOutlineFileImage size={40} color="#fff" />
              <div>
                <p>Revendedores</p>
              </div>
            </div>
          </div>
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
          <div className="content__item">
            <label htmlFor="name">Seu nome (obrigatório)</label>
            <input type="text" id="name" />
          </div>
          <div className="content__item">
            <label htmlFor="email">Seu e-mail (obrigatório)</label>
            <input type="text" id="email" />
          </div>
          <div className="content__item">
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" />
          </div>
          <div className="content__item">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" />
          </div>
          <button type="submit" className="form__button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
