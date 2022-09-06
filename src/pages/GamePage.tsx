import React, { useEffect, useState } from "react";
import { Board } from "../components/Board";
import KennyElement from "../components/KennyElement";
import kennyImage from "../svg/kenny.png";
import { useServices } from "../services/ServiceProvider";

export const GamePage = () => {
  const [deadKennysCounter, setDeadKennysCounter] = useState(0);
  const [activeKennys, setActiveKennys] = useState<JSX.Element[]>([]);

  const [boardWidth, setBoardWidth] = useState<number>(0);

  const [countDown, setCountDown] = useState<number | undefined>(undefined);
  const [game, setGame] = useState(false);

  const { gameService } = useServices();

  const countDeadKennys = () => {
    setDeadKennysCounter(
      (deadKennysCounter) => (deadKennysCounter = deadKennysCounter + 1)
    );
  };

  const addNewKenny = () => {
    const board = document.getElementById("board");

    const newKenny = (
      <KennyElement
        countDeadKennys={countDeadKennys}
        position={Math.random() * boardWidth}
        timeout={1000 + Math.random() * 5000}
        jumpTime={3 + Math.random() * 3}
        elementImage={kennyImage}
      />
    );

    setActiveKennys((activeKennys) => [...activeKennys, newKenny]);
  };

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

      <Board activeKennys={activeKennys} onBoardWidthChange={setBoardWidth} />
      {/* {game ? <p>{"game-service.ts over"}</p> : null}
      <p>Dead Kennys {deadKennysCounter}</p>
      <p>Aktive Kennys {activeKennys.length}</p>

      <GameBoard activeKennys={activeKennys} onBoardWidthChange={onBoardWidthChange} />*/}
    </div>
  );
};
