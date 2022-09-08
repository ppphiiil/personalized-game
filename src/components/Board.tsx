import React, { useEffect, useRef, useState } from "react";
import KennyElement from "./KennyElement";
import kennyImage from "../svg/kenny.png";
import "./style/Board.css";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service";

interface Props {
  activeKennys: JSX.Element[];
  onBoardWidthChange: (width: number) => void;
  ref: any;
  gameInfos: GameInfos | null;
  onStartGame: () => void;
}
export const Board = ({
  activeKennys,
  onBoardWidthChange,
  gameInfos,
  onStartGame,
}: Props) => {
  const { gameService } = useServices();

  console.log("render Board.tsx");
  const boardRef = useRef<any>();
  useEffect(() => {
    if (boardRef.current) {
      let width = boardRef.current.offsetWidth - 80;
      onBoardWidthChange(width);
    }
  }, [boardRef]);

  /* <KennyElement
      countDeadKennys={countDeadKennys}
      position={Math.random() * boardWidth}
      timeout={1000 + Math.random() * 5000}
      jumpTime={3 + Math.random() * 3}
      elementImage={kennyImage}
    />;*/

  return (
    <>
      <div id="board" className="board">
        <p id="countdown" className="countdown" />
        <p>{gameInfos?.countDown}</p>
        {!gameInfos?.isGameRunning && (
          <div className="boardStartDialog">
            <button onClick={onStartGame}>start</button>
          </div>
        )}
        {activeKennys.map((kenny) => {
          return kenny;
        })}
      </div>
    </>
  );
};
