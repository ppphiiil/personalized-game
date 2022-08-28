import { useEffect, useRef, useState } from "react";

export const GameBoard = ({ activeKennys, setBoardWidth }) => {
  const boardRef = useRef();
  useEffect(() => {
    if (boardRef.current) {
      let width = boardRef.current.offsetWidth - 80;
      setBoardWidth(width);
    }
  }, [boardRef]);
  return (
    <div ref={boardRef} id="board" className="board">
      {activeKennys.map((kenny) => {
        return kenny;
      })}
    </div>
  );
};
