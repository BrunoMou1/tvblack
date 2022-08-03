import { useRef } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import "./styles.scss";

export function PerguntaItemDir({ title, description, onToggle, active }) {
  const contentDir = useRef();
  return (
    <div
      className={`content__perguntas__dir ${active ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="item__header">
        <div></div>
        <h2>{title}</h2>
        {active ? (
          <BsArrowUpShort size={40} className="pergunta__arrow" />
        ) : (
          <BsArrowDownShort className="pergunta__arrow" />
        )}
      </div>
      <div className={`item__description__dir ${active ? "open" : ""} `}>
        {description?.map((item, index) => {
          return (
            <p
              key={index}
              ref={contentDir}
              style={
                active
                  ? { height: contentDir?.current.scrollHeight }
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
