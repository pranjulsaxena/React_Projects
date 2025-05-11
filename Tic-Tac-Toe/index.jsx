import React, { useEffect, useState } from "react";

function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isTurnX, setTurnX] = useState(false);
  const [status, setStatus] = useState("");

  const handleClick = (index) => {
    let cpy = [...square];
    if (getWinner(cpy) || cpy[index]) return;
    cpy[index] = isTurnX ? "X" : "O";
    setSquare(cpy);
    setTurnX(!isTurnX);
  };

  const getWinner = (square) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }

    }
    return null;
  };

  const Restart = () => {
    console.log("Restart");
    setSquare(Array(9).fill(""));
    setTurnX(false);
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus("This is draw!! . Press below button to restart game");
    } else if (getWinner(square)) {
      setStatus(`Winner is: ${getWinner(square)}`);
    } else {
      setStatus(`Next Player is ${isTurnX ? "X" : "O"}`);
    }
  }, [square, isTurnX]);

  return (
    <div className="min-h-screen w-screen flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex max-w-2xl flex-wrap">
          {[...Array(9)].map((_, index) => (
            <Square
              key={index}
              value={square[index]}
              onClick={() => {
                handleClick(index);
              }}
            />
          ))}
        </div>
        <div className="font-bold text-3xl">{status}</div>
        <div><button className="px-3 py-2 bg-blue-500 rounded-md text-white  text-xl cursor-pointer" onClick={() => { Restart() }}>Restart</button></div>
      </div>
    </div>
  );
}

function Square({ onClick, value }) {
  return (
    <div
      className="bg-gray-100 border w-45 h-45 cursor-pointer text-9xl flex justify-center items-center "
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default TicTacToe;
