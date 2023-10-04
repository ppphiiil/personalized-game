import React, { useEffect, useRef, useState } from "react";
import { Board } from "../components/board/Board";
import JumperComponent, {
  IJumper,
} from "../components/jumperComponent/JumperComponent";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service/game-service";
import { useStartGame } from "../hooks/useStartGame";
import { FormControl, TextField } from "@mui/material";

export const GamePage = () => {
  console.log("RENDER GAMEPAGE");
  const [gameInfos, setGameInfos] = useState<GameInfos | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [fightName, setFightName] = useState<string>("");

  const { gameService } = useServices();
  const { mutate: startGame, error, isLoading } = useStartGame();

  useEffect(() => {
    const id = gameService.addListener((gameinfos) => {
      setGameInfos(gameinfos);
    });
    return () => gameService.removeListener(id);
  }, [gameService]);

  console.log(
    "gameService._jumpersArray",
    gameService._jumpersArray
  ); /*todo redners every second*/
  return (
    <div className="container">
      <h1>Kennys Game</h1>

      <Board
        className="board"
        onStartGame={() => {
          gameService.startNewLevel();
        }}
        gameInfos={gameInfos}
        jumpers={gameService._jumpersArray ?? []}
        isLoading={isLoading}
      />
      {!localStorage.getItem("id") && (
        <div className="boardStartDialogContainer">
          <div className={"boardStartDialog"}>
            <h1>{"Das Spiel beginnen lassen muss!"}</h1>

            <FormControl
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "30px",
                gap: "30px",
              }}
            >
              <TextField
                label="Vorname"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                label="Kampfname"
                value={fightName}
                onChange={(e) => {
                  setFightName(e.target.value);
                }}
              />
              <button
                className="button"
                type={"submit"}
                onClick={() => {
                  console.log(firstName, fightName);
                  startGame({ firstName, fightName });
                }}
              >
                weiter
              </button>
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
};
