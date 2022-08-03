import { useRef } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import "./styles.scss";

export function PerguntaItemEsq({ title, description, onToggle, active }) {
  const contentEsq = useRef();


  return (
    <div className="content__perguntas__esq" onClick={onToggle}>
      <div className="item__header">
        <div></div>
        <h2>{title}</h2>
        {active ? (
          <BsArrowUpShort size={40} className="pergunta__arrow" />
        ) : (
          <BsArrowDownShort className="pergunta__arrow" />
        )}
      </div>
      <div className={`item__description__esq ${active ? "open" : ""} `}>
        {description?.map((item, index) => {
          return (
            <p
              key={index}
              ref={contentEsq}
              style={
                active
                  ? { height: contentEsq?.current.scrollHeight }
                  : { height: "0px" }
              }
            >
              {item.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
