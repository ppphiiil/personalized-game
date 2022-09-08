import React, { useEffect, useRef, useState } from "react";
import { Board } from "../components/Board";
import KennyElement from "../components/KennyElement";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";
import { GameInfos } from "../services/game-service";

export const GamePage = () => {
  const [deadKennysCounter, setDeadKennysCounter] = useState(0);
  const [activeKennys, setActiveKennys] = useState<JSX.Element[]>([]);

  const [boardWidth, setBoardWidth] = useState<number>(0);

  const [gameInfos, setGameInfos] = useState<GameInfos | null>(null);

  const { gameService } = useServices();

  const ref = useRef(null);

  const countDeadKennys = () => {
    setDeadKennysCounter(
      (deadKennysCounter) => (deadKennysCounter = deadKennysCounter + 1)
    );
  };

  useEffect(() => {
    const id = gameService.addListener((gameinfos) => {
      setGameInfos(gameinfos);
    });
    return () => gameService.removeListener(id);
  }, [gameService, setGameInfos]);

  const addNewKenny = () => {};

  /*const startCountDown = async (number: number) => {
            setCountDown(number);
            setGame(false);
            return new Promise((resolve) => {
              const countDownDate = new Date().getTime() + number * 1000;
              const countDown = setInterval(function () {
                const now = new Date().getTime();
                const timeleft = countDownDate - now;

                const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                if (timeleft <= 0) {
                  clearInterval(countDown);
                  resolve(true);
                  return;
                }
                setCountDown(seconds);
              }, 1000);
            });
          };*/

  return (
    <div className="container">
      <h1>Kennys Game</h1>
      {/*todonext kreiere einen kenny und dann creiere ihn im board und übergieb die daten.*/}
      <Board
        ref={ref}
        onStartGame={() => gameService.startNewGame()}
        gameInfos={gameInfos}
        activeKennys={activeKennys}
        onBoardWidthChange={setBoardWidth}
      />
      {/* {game ? <p>{"game-service.ts over"}</p> : null}
      <p>Dead Kennys {deadKennysCounter}</p>
      <p>Aktive Kennys {activeKennys.length}</p>

      <GameBoard activeKennys={activeKennys} onBoardWidthChange={onBoardWidthChange} />*/}
    </div>
  );
};
