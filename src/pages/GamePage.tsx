import React, { useEffect, useRef, useState } from "react";
import { Board } from "../components/board/Board";
import JumperComponent, {
  IJumper,
} from "../components/jumperComponent/JumperComponent";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service/game-service";

export const GamePage = () => {
  const [deadKennysCounter, setDeadKennysCounter] = useState(0);
  const countDeadKennys = () => {
    setDeadKennysCounter(
      (deadKennysCounter) => (deadKennysCounter = deadKennysCounter + 1)
    );
  };

  const [gameInfos, setGameInfos] = useState<GameInfos | null>(null);
  const { gameService } = useServices();

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
        onStartGame={() => {
          gameService.startGame();
        }}
        gameInfos={gameInfos}
        jumpers={gameService._jumpersArray ?? []}
      />
      {/* {game ? <p>{"game-service.ts over"}</p> : null}
      <p>Dead Kennys {deadKennysCounter}</p>
      <p>Aktive Kennys {activeKennys.length}</p>

      <GameBoard activeKennys={activeKennys} onBoardWidthChange={onBoardWidthChange} />*/}
    </div>
  );
};
