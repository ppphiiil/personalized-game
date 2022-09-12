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

export const Board = ({
  jumpers,

  boardRef,
  onStartGame,
  gameInfos,
}: Props) => {
  console.log("jumpers", jumpers);
  console.log("boardRef", boardRef);
  console.log("onStartGame", onStartGame);
  console.log("gameInfos", gameInfos);
  console.log("render Board.tsx");
  console.log("gameInfos", gameInfos);
  const [jumperElements, setJumperElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    console.log("jumperElements", jumperElements);
    setJumperElements(
      jumpers.map((jumper) => {
        return (
          <Jumper
            position={jumper.position}
            jumpTime={jumper.jumpTime}
            jumpDuration={jumper.jumpDuration}
            jumperImage={jumper.jumperImage}
            onShotJumper={jumper.onShotJumper}
          />
        );
      })
    );
  }, [jumpers]);

  return (
    <div ref={boardRef} id="board" className="board">
      <p id="countdown" className="countdown" />
      <p>{"Time " + gameInfos?.countDown}</p>
      <p>{"Shot " + gameInfos?.score + " of " + gameInfos?.amountOfJumpers}</p>

      {!gameInfos?.isGameRunning && (
        <div className="boardStartDialog">
          <button onClick={onStartGame}>start</button>
        </div>
      )}
      {jumperElements.map((jumper) => {
        return jumper;
      })}
    </div>
  );
};
