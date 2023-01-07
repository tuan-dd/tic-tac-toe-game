import React from "react";
import Square from "./Square";

function Board({ squares, handleClick }) {
  const firstRow = squares.slice(0, 3);
  const secondRow = squares.slice(3, 6);
  const thirdRow = squares.slice(6);
  return (
    <div className="board">
      <div>
        <div className="board-row" key="firstRow">
          {firstRow.map((value, index) => (<div key={index}><Square value={value} handleClick={handleClick} index={index} /></div>))}
        </div>
        <div className="board-row" key="secondRow">
          {secondRow.map((value, index) => (<div key={index}><Square value={value} handleClick={handleClick} index={index + 3} /></div>))}
        </div>
        <div className="board-row" key="thirdRow">
          {thirdRow.map((value, index) => (<div key={index}><Square value={value} handleClick={handleClick} index={index + 6} /></div>))}
        </div>
      </div>
    </div>
  );
}
export default Board;