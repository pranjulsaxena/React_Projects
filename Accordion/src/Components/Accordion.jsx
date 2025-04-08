import data from "../data";
import { useState, useRef } from "react";

import React from "react";

function Accordion() {
  const [enableMulti, setMulti] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiState, setmultiState] = useState([]);

  function handleClick_single(id) {
    setSelected(selected === id ? null : id);
  }

  function handleClick_multi(id) {
    const cpy = [...multiState];
    const index = cpy.indexOf(id);
    if (index === -1) {
      cpy.push(id);
    } else {
      cpy.splice(index, 1); // removes 1 item at known index in multi state array.s
    }
    setmultiState(cpy);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col w-[500px] gap-y-2  p-4">
        <button
          className="mb-10 bg-amber-800 p-3 border cursor-pointer text-white"
          onClick={() => setMulti(!enableMulti)}
        >
          {enableMulti
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>
        {data.map((dataItems) => (
          <div className="flex flex-col  bg-amber-800 w-[500px] py-[20px] px-[10px] gap-y-4">
            <div className="flex justify-between  ">
              <div className="text-white font-bold">{dataItems.question}</div>
              <div className="cursor-pointer text-white " onClick={() => { enableMulti ? handleClick_multi(dataItems.id) : handleClick_single(dataItems.id) }}>+</div>
            </div>
            {enableMulti ? multiState.includes(dataItems.id) && (<div>{dataItems.answer}</div>) :
              selected === dataItems.id && (<div>{dataItems.answer}</div>)
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;