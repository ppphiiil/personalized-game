import kennyImage from "../../svg/kenny.png";
import "./Board.css";
import { useServices } from "../../services/ServiceProvider";
import { GameInfos } from "../../services/game-service/game-service";
import { Jumper } from "../../services/jumpers/Jumper";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import JumperComponent from "../jumperComponent/JumperComponent";
import styled from "styled-components";

interface Props {
  onStartGame: () => void;
  gameInfos: GameInfos | null;
  jumpers: Jumper[];
}
const InfoContainer = styled("div")({
  display: "flex",
  position: "absolute",
  top: "0px",
  left: "0px",
});
export const Board = ({ jumpers, onStartGame, gameInfos }: Props) => {
  const [jumperElements, setJumperElements] = useState<JSX.Element[]>([]);
  const boardRef = useRef<any>(null);

  //get the board position for the jumper
  let boardWidth: number = 0;
  useEffect(() => {
    if (boardRef.current) {
      boardWidth = boardRef.current.offsetWidth - 80;
    }
  });

  useEffect(() => {
    const jumperComponents = jumpers.map((jumper: Jumper) => {
      return (
        <>
          {gameInfos && (
            <JumperComponent
              position={Math.random() * boardWidth}
              jumpAt={
                Math.random() *
                (gameInfos.gameDuration - jumper._animationDuration)
              }
              jumperImage={jumper.jumperImage}
              onShotJumper={jumper.onShotJumper}
              onPlaySound={jumper.onPlaySound}
              animation={jumper.animation}
            />
          )}
        </>
      );
    });
    console.log("setJumperElements");
    setJumperElements(jumperComponents);
  }, [jumpers]);

  return (
    <div ref={boardRef} id="board" className="board">
      <InfoContainer>
        <div style={{ padding: 10 }}>
          <h2 style={{ opacity: 0.5 }}>{"Time"}</h2>
          <h2 style={{ textAlign: "center" }}>{gameInfos?.countDown}</h2>
        </div>
        <div style={{ padding: 10 }}>
          <h2 style={{ opacity: 0.5 }}>{"Shots"}</h2>
          <h2>{gameInfos?.score + " of " + gameInfos?.amountOfJumpers}</h2>{" "}
        </div>
      </InfoContainer>

      {
        <div className="boardStartDialog">
          <h1>{"Das Spiel beginnen lassen muss!"}</h1>
          <p>{"Vorname"}</p>
          <p>{"Kampfname"}</p>
        </div>
      }
      {/*{!gameInfos?.isGameRunning && gameInfos?.controlerBoard && (
        <div className="boardStartDialog">
          <h1>{gameInfos.controlerBoard.title}</h1>
          <p>{gameInfos.controlerBoard.description}</p>
          <button className="button" onClick={onStartGame}>
            {gameInfos.controlerBoard.buttonText}
          </button>
          <p>{`Level ${gameInfos?.level}`}</p>
        </div>
      )}*/}
      {jumperElements.map((jumper) => {
        return jumper;
      })}
    </div>
  );
};
