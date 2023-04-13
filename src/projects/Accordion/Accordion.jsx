import { useState } from "react";
import "./accordion.scss";
import data from "./data.js";

const accordionData = data;

const Accordion = () => {
const [active, setActive] = useState(false);
const [selected, setSelected] = useState(0);

  const toggleActive = (e) => {
    if (active && selected === e) {
        setSelected(0);
        setActive(!active);
     }else{
        setSelected(e);
        setActive(!active);
     }
  };

  return (
    <div className="accordionBox">
        <h2>Frequent asked questions</h2>
      {accordionData.map((item) => {
        return (
          <div className="buttonBox" key={item.id}>
            <button
              onClick={() => toggleActive(item.id)}
              className={selected === item.id ? "accordionButton opened" : "accordionButton"}
            >
              <span className="accordionTitle">{item.title}</span>
            </button>
            <div className="accordionContent">{selected === item.id ? <p className='open'>{item.content}</p> : <p className='close'>{item.content}</p>}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
