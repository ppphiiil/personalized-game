import React, { useEffect, useRef, useState } from "react";
import { Board } from "../components/board/Board";
import JumperComponent, {
  IJumper,
} from "../components/jumperComponent/JumperComponent";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service/game-service";

export const GamePage = () => {
  console.log("render GamePage");
  const [deadKennysCounter, setDeadKennysCounter] = useState(0);

  const [gameInfos, setGameInfos] = useState<GameInfos | null>(null);
  const { gameService } = useServices();

  const countDeadKennys = () => {
    setDeadKennysCounter(
      (deadKennysCounter) => (deadKennysCounter = deadKennysCounter + 1)
    );
  };

  useEffect(() => {
    const id = gameService.addListener((gameinfos) => {
      console.log("gameInfos change");
      setGameInfos(gameinfos);
    });
    return () => gameService.removeListener(id);
  }, [gameService]);

  return (
    <div className="container">
      <h1>Kennys Game</h1>

      <Board
        onStartGame={() => {
          gameService.startNewGame();
        }}
        gameInfos={gameInfos}
        jumpers={gameInfos?.jumpersArray ?? []}
      />
      {/* {game ? <p>{"game-service.ts over"}</p> : null}
      <p>Dead Kennys {deadKennysCounter}</p>
      <p>Aktive Kennys {activeKennys.length}</p>

      <GameBoard activeKennys={activeKennys} onBoardWidthChange={onBoardWidthChange} />*/}
    </div>
  );
};
