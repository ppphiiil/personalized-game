import React, { useEffect, useRef, useState } from "react";
import Jumper, { JumperType } from "./Jumper";
import kennyImage from "../svg/kenny.png";
import "./style/Board.css";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service";

interface Props {
  onStartGame: () => void;
  gameInfos: GameInfos | null;
  boardRef: any;
  jumpers: JumperType[];
}

export const Board = ({ jumpers, boardRef, onStartGame, gameInfos }: Props) => {
  console.log("jumpers", jumpers);
  console.log("boardRef", boardRef);
  console.log("onStartGame", onStartGame);
  console.log("gameInfos", gameInfos);
  console.log("render Board.tsx");
  console.log("gameInfos", gameInfos);

  return (
    <div ref={boardRef} id="board" className="board">
      <p id="countdown" className="countdown" />
      <p>{gameInfos?.countDown}</p>
      {!gameInfos?.isGameRunning && (
        <div className="boardStartDialog">
          <button onClick={onStartGame}>start</button>
        </div>
      )}
      {jumpers.map((jumper) => {
        return (
          <Jumper
            position={jumper.position}
            jumpTime={jumper.jumpTime}
            jumpDuration={jumper.jumpDuration}
            jumperImage={jumper.jumperImage}
          />
        );
      })}
    </div>
  );
};
