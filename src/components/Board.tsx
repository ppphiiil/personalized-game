import React, { useEffect, useRef, useState } from "react";
import KennyElement from "./KennyElement";
import kennyImage from "../svg/kenny.png";
import "./style/Board.css";
import { useServices } from "../services/ServiceProvider";

interface Props {
  activeKennys: JSX.Element[];
  onBoardWidthChange: (width: number) => void;
}
export const Board = ({ activeKennys, onBoardWidthChange }: Props) => {
  const { gameService } = useServices();

  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);

  const boardRef = useRef<any>();
  useEffect(() => {
    if (boardRef.current) {
      let width = boardRef.current.offsetWidth - 80;
      onBoardWidthChange(width);
    }
  }, [boardRef]);

  useEffect(() => {
    const id = gameService.addListener((gameinfos) => {
      setIsGameRunning(gameinfos.isGameRunning);
    });
    return () => gameService.removeListener(id);
  }, [gameService, setIsGameRunning]);

  /* <KennyElement
      countDeadKennys={countDeadKennys}
      position={Math.random() * boardWidth}
      timeout={1000 + Math.random() * 5000}
      jumpTime={3 + Math.random() * 3}
      elementImage={kennyImage}
    />;*/

  return (
    <>
      <div ref={boardRef} id="board" className="board">
        <p id="countdown" className="countdown" />
        {!isGameRunning && (
          <div className="boardStartDialog">
            <button onClick={gameService.startNewGame}>start</button>
          </div>
        )}
        {activeKennys.map((kenny) => {
          return kenny;
        })}
      </div>
    </>
  );
};
