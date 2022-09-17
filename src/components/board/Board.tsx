import kennyImage from "../../svg/kenny.png";
import "./Board.css";
import { useServices } from "../../services/ServiceProvider";
import { GameInfos } from "../../services/game-service/game-service";
import { Jumper } from "../../services/jumpers/Jumper";
import { useEffect, useRef, useState } from "react";
import JumperComponent from "../jumperComponent/JumperComponent";

interface Props {
  onStartGame: () => void;
  gameInfos: GameInfos | null;
  jumpers: Jumper[];
}

export const Board = ({ jumpers, onStartGame, gameInfos }: Props) => {
  console.log("jumpers", jumpers);
  console.log("onStartGame", onStartGame);
  console.log("gameInfos", gameInfos);
  console.log("render Board.tsx");
  console.log("gameInfos", gameInfos);
  const [jumperElements, setJumperElements] = useState<JSX.Element[]>([]);
  const boardRef = useRef<any>(null);

  let boardWidth: number = 0;
  useEffect(() => {
    if (boardRef.current) {
      boardWidth = boardRef.current.offsetWidth - 80;
    }
  });

  useEffect(() => {
    console.log("jumperElements", jumperElements);
    setJumperElements(
      jumpers.map((jumper) => {
        console.log("jumper.animation", jumper.animation);
        return (
          <>
            {gameInfos && (
              <JumperComponent
                position={Math.random() * boardWidth}
                jumpTime={Math.random() * gameInfos?.gameDuration * 1000}
                jumpDuration={jumper.jumpDuration}
                jumperImage={jumper.jumperImage}
                onShotJumper={jumper.onShotJumper}
                animation={jumper.animation}
                sound={jumper.sound}
              />
            )}
          </>
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
