import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from './History';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // array.length 9
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  // console.log('render')
  //Declaring a Winner

  useEffect(() => {
    // console.log('run effect')
    const result = calculateWinner(squares)
    // console.log(result)
    if (result !== null) {
      setWinner(result === "X" ? 'X' : result === 'O' ? 'O' : null)
    } else if (!squares.includes(null) && !result) {
      setWinner('Draw')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares.toString()])


  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] && // 
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (clickedIndex) => {
    if (xIsNext && squares[clickedIndex] === null && !winner) {
      setSquares(() => squares.fill('X', clickedIndex, clickedIndex + 1))
      setXIsNext(() => false)
    } else if (!xIsNext && squares[clickedIndex] === null && !winner) {
      setSquares(() => squares.fill('O', clickedIndex, clickedIndex + 1))
      setXIsNext(() => true)
    }
  };

  //Restart game
  const handleRestart = () => {
    setSquares(() => Array(9).fill(null)) // ?
    setWinner(() => null)
    setXIsNext(() => true)
  };
  return (
    <div className="main">
      <h2 className="result">{winner === "X" ? `Result : X win O ` : winner === "O" ? `Result : O win X ` : winner === "Draw" ? `Result : Draw ` : `X or O ?`}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext && !winner ? "X" : !xIsNext && !winner ? "O" : " "}</span>
        <Board squares={squares} handleClick={handleClick} />
        <History squares={squares} xIsNext={xIsNext} handleRestart={handleRestart} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
