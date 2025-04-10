import React, { useState } from 'react'

function Random_Color_Generator() {
  const [color, setColor] = useState("#000000");
  const [typeColor, settypecolor] = useState("Hex");

  function HexColor() {
    let Hex_value = "#";
    const array = [
      "A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 6; i++) {
      let indx = Math.floor(Math.random() * 16);
      Hex_value += array[indx];
    }
    setColor(Hex_value);
  }
  function RgbColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`)
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-y-[320px]" style={{ backgroundColor: color }} >
      <div className='mt-5'>
        <button className={`bg-white p-2 rounded-xl border-2 font-bold cursor-pointer`} onClick={() => { typeColor === "Hex" ? HexColor() : RgbColor() }}>Generate Color</button>
        <button className='bg-white mx-2 p-2 rounded-xl border-2 font-bold cursor-pointer' onClick={() => { settypecolor("Hex") }}>Hex Color</button>
        <button className='bg-white p-2 rounded-xl border-2 font-bold cursor-pointer' onClick={() => { settypecolor("rgb") }}>rgb Color</button>
      </div >

      <div>
        <div className='text-4xl text-white font-bold'> Color code is : {color}</div>
      </div>
    </div>
  )
}

export default Random_Color_Generator
