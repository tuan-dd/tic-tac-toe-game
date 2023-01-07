import React from "react";

function Square({ value, handleClick, index }) {
  return (
    <button className={"square"} onClick={() => handleClick(index)}>
      {value}
    </button >
  );
}

export default Square;
