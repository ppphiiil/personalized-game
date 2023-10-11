import React, { useEffect, useRef, useState } from "react";
import { Board } from "../components/board/Board";
import JumperComponent, {
  IJumper,
} from "../components/jumperComponent/JumperComponent";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service/game-service";
import { useStartGame } from "../hooks/useStartGame";
import { FormControl, Grid, LinearProgress, TextField } from "@mui/material";
import { useRanking } from "../hooks/useRanking";

export const GamePage = () => {
  console.log("RENDER GAMEPAGE");
  const [gameInfos, setGameInfos] = useState<GameInfos | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [fightName, setFightName] = useState<string>("");

  const { gameService } = useServices();
  const {
    data: ranking,
    isLoading: isLoadingRanking,
    error: rankingError,
  } = useRanking(gameInfos?.totalScore);
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
    <>
      <div className="container">
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

      {!isLoading ? (
        ranking && (
          <div style={{ padding: 30 }}>
            <table style={{ width: "100%" }}>
              <th align="left" style={{ padding: "20px" }}>
                <td>{""}</td>
              </th>
              <th align="left" style={{ padding: "20px", opacity: 0.3 }}>
                <td>{"Spieler"}</td>
              </th>
              <th align="center" style={{ padding: "20px", opacity: 0.3 }}>
                <td>{"Shot Kenny`s"}</td>
              </th>
              <th align="center" style={{ padding: "20px", opacity: 0.3 }}>
                <td>{"Level"}</td>
              </th>
              {ranking.map((listing: any, index: any) => {
                return (
                  <tr>
                    <td align="left">
                      {(() => {
                        switch (index + 1) {
                          case 1:
                            return (
                              <h2
                                style={{
                                  padding: 20,
                                  color: "gold",
                                  fontSize: "2rem",
                                }}
                              >
                                {index + 1}
                              </h2>
                            );
                          case 2:
                            return (
                              <h2
                                style={{
                                  padding: 20,
                                  color: "silver",
                                  fontSize: "2rem",
                                }}
                              >
                                {index + 1}
                              </h2>
                            );
                          case 3:
                            return (
                              <h2
                                style={{
                                  padding: 20,
                                  color: "#cd7f32",
                                  fontSize: "2rem",
                                }}
                              >
                                {index + 1}
                              </h2>
                            );
                          default:
                            return (
                              <h2 style={{ padding: 20, opacity: 0.3 }}>
                                {index + 1}
                              </h2>
                            );
                        }
                      })()}
                    </td>
                    <td align="left">
                      {
                        <h2
                          style={{
                            padding: 20,
                            opacity: index + 1 > 3 ? 0.3 : 1,
                          }}
                        >
                          {listing.name}
                        </h2>
                      }
                    </td>
                    <td align="center">
                      {
                        <h2
                          style={{
                            padding: 20,
                            opacity: index + 1 > 3 ? 0.3 : 1,
                          }}
                        >
                          {listing.totalScore}
                        </h2>
                      }
                    </td>
                    <td align="center">
                      {
                        <h2
                          style={{
                            padding: 20,
                            opacity: index + 1 > 3 ? 0.3 : 1,
                          }}
                        >
                          {"LEVEL " + listing.level}
                        </h2>
                      }
                    </td>
                  </tr>

                  /*   <div style={{ display: "flex", flexDirection: "row" }}>
                  {(() => {
                    switch (index + 1) {
                      case 1:
                        return (
                          <h2
                            style={{
                              padding: 20,
                              color: "gold",
                              fontSize: "2rem",
                            }}
                          >
                            {index + 1}
                          </h2>
                        );
                      case 2:
                        return (
                          <h2
                            style={{
                              padding: 20,
                              color: "silver",
                              fontSize: "2rem",
                            }}
                          >
                            {index + 1}
                          </h2>
                        );
                      case 3:
                        return (
                          <h2
                            style={{
                              padding: 20,
                              color: "#cd7f32",
                              fontSize: "2rem",
                            }}
                          >
                            {index + 1}
                          </h2>
                        );
                      default:
                        return <h2 style={{ padding: 20 }}>{index + 1}</h2>;
                    }
                  })()}
                  <h2 style={{ padding: 20 }}>{listing.name}</h2>
                  <h2 style={{ padding: 20 }}>{listing.totalScore}</h2>
                  <h2 style={{ padding: 20 }}>{"LEVEL " + listing.level}</h2>
                </div>*/
                );
              })}
            </table>
          </div>
        )
      ) : (
        <div style={{ zIndex: 1000, width: "50%" }} className="loading">
          <Grid xs item>
            <LinearProgress color={"primary"} />
          </Grid>
        </div>
      )}
    </>
  );
};
