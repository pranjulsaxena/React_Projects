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
    setSquare(Array(9).fill(""));
    setTurnX(false);
    setStatus("");
  };

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus("It's a draw! Press the button to restart.");
    } else if (getWinner(square)) {
      setStatus(`🎉 Winner: ${getWinner(square)}!`);
    } else {
      setStatus(`Next Turn: ${isTurnX ? "X" : "O"}`);
    }
  }, [square, isTurnX]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      <h1 className="text-4xl font-bold text-indigo-800 mb-6">Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-lg shadow-md">
        {square.map((val, index) => (
          <Square key={index} value={val} onClick={() => handleClick(index)} />
        ))}
      </div>

      <div className="mt-6 text-2xl font-semibold text-indigo-900 text-center">
        {status}
      </div>

      <button
        className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
        onClick={Restart}
      >
        Restart Game
      </button>
    </div>
  );
}

function Square({ onClick, value }) {
  return (
    <div
      onClick={onClick}
      className="w-24 h-24 md:w-28 md:h-28 flex justify-center items-center text-4xl md:text-5xl font-bold text-indigo-800 border border-gray-300 bg-gray-100 hover:bg-indigo-100 cursor-pointer transition"
    >
      {value}
    </div>
  );
}

export default TicTacToe;
