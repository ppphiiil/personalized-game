import { useEffect, useRef, useState } from "react";

interface Props {
  activeKennys: JSX.Element[];
  setBoardWidth: (width: number) => void;
}
export const GameBoard = ({ activeKennys, setBoardWidth }: Props) => {
  const boardRef = useRef<any>();
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
