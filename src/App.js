import React, { useEffect, useState, useRef } from "react";
import KennyElement from "./components/KennyElement";
import kennyImage from "./svg/kenny.png";
import { GameBoard } from "./components/GameBoard";

function App() {
  const [deadKennysCounter, setDeadKennysCounter] = useState(0);
  const [activeKennys, setActiveKennys] = useState([]);
  const [boardWidth, setBoardWidth] = useState(0);
  const [countDown, setCountDown] = useState(undefined);
  const [game, setGame] = useState(false);

  const countDeadKennys = () => {
    setDeadKennysCounter(
      (deadKennysCounter) => (deadKennysCounter = deadKennysCounter + 1)
    );
  };

  const createKenny = () => {
    return (
      <KennyElement
        countDeadKennys={countDeadKennys}
        position={Math.random() * boardWidth}
        timeout={1000 + Math.random() * 5000}
        jumpTime={3 + Math.random() * 3}
        elementImage={kennyImage}
      />
    );
  };
  const addNewKenny = () => {
    const board = document.getElementById("board");
    const newKenny = createKenny();

    setActiveKennys((activeKennys) => [...activeKennys, newKenny]);
  };

  const startCountDown = async (number) => {
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
  };

  const startGame = async () => {
    setGame(await startCountDown(10));
    addNewKenny();
    addNewKenny();
  };

  return (
    <div className="container">
      <h1>Kennys Game</h1>
      <p>{countDown}</p>
      {game ? <p>{"game over"}</p> : null}
      <p>Dead Kennys {deadKennysCounter}</p>
      <p>Aktive Kennys {activeKennys.length}</p>
      <button onClick={startGame}>start</button>
      <GameBoard activeKennys={activeKennys} setBoardWidth={setBoardWidth} />
    </div>
  );
}

export default App;
