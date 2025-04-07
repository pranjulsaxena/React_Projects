import data from "../data";
import { useState, useRef } from "react";

import React from "react";

function Accordion() {

  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(selected === id ? null : id);
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col w-[500px] gap-y-2  p-4">
        {data.map((dataItems) => (
          <div className="flex flex-col  bg-amber-800 w-[500px] py-[20px] px-[10px] gap-y-4">
            <div className="flex justify-between  ">
              <div className="text-white font-bold">{dataItems.question}</div>
              <div className="cursor-pointer text-white " onClick={() => { handleClick(dataItems.id); }}>+</div>
            </div>
            {selected === dataItems.id ? <div className="text-white">{dataItems.answer}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
