import kennyImage from "../../svg/kenny.png";
import "./Board.css";
import { useServices } from "../../services/ServiceProvider";
import { GameInfos } from "../../services/game-service/game-service";
import { Jumper } from "../../services/jumper-service/Jumper";
import {
  FormEventHandler,
  HTMLProps,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import JumperComponent from "../jumperComponent/JumperComponent";
import styled from "styled-components";
import { FormControl, Grid, LinearProgress, TextField } from "@mui/material";

interface Props {
  onStartGame: () => void;
  gameInfos: GameInfos | null;
  jumpers: Jumper[];
  isLoading: boolean;
}
const InfoContainer = styled("div")({
  display: "flex",
  position: "absolute",
  color: "white",
  top: "0px",
  left: "0px",
});
export const Board = ({
  jumpers,
  onStartGame,
  gameInfos,
  isLoading,
  ...props
}: Props & HTMLProps<HTMLDivElement>) => {
  console.log("RENDER BOARD");
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
    <div ref={boardRef} id="board" {...props}>
      <InfoContainer>
        <div style={{ padding: 10 }}>
          <h2 style={{ opacity: 0.5, color: "inherit" }}>{"Time"}</h2>
          <h2 style={{ textAlign: "center", color: "inherit" }}>
            {gameInfos?.countDown}
          </h2>
        </div>
        <div style={{ padding: 10 }}>
          <h2 style={{ opacity: 0.5, color: "inherit" }}>{"Shots"}</h2>
          <h2 style={{ color: "inherit" }}>
            {gameInfos?.levelScore + " of " + gameInfos?.amountOfJumpers}
          </h2>
        </div>
        <div style={{ padding: 10, color: "inherit" }}>
          <h2 style={{ opacity: 0.5, color: "inherit" }}>{"Total"}</h2>
          <h2 style={{ color: "inherit" }}>{gameInfos?.totalScore}</h2>
        </div>
      </InfoContainer>

      {isLoading && (
        <div style={{ zIndex: 1000, width: "50%" }} className="loading">
          <Grid xs item>
            <LinearProgress color={"primary"} />
          </Grid>
        </div>
      )}

      {!gameInfos?.isGameRunning &&
        localStorage.getItem("id") &&
        gameInfos?.controlerBoard !== undefined && (
          <div className="boardStartDialogContainer">
            <div className="boardStartDialog">
              <h1
                style={{
                  textAlign: "center",
                  color: "white",
                  opacity: 0.9,
                  fontSize: "3rem",
                }}
              >{`Level ${gameInfos?.level}`}</h1>
              <h1 style={{ textAlign: "center" }}>
                {gameInfos.controlerBoard.title}
              </h1>
              <p style={{ textAlign: "center" }}>
                {gameInfos.controlerBoard.description}
              </p>

              <button
                style={{ alignSelf: "center", width: "50%" }}
                className="button"
                onClick={() => gameInfos?.controlerBoard?.onClick()}
              >
                {gameInfos.controlerBoard.buttonText}
              </button>
            </div>
          </div>
        )}
      {jumperElements.map((jumper, index) => {
        console.log(`Render kenny at position ${index}`);
        return jumper;
      })}
    </div>
  );
};
