import kennyImage from "../svg/kenny.png";
import KennyElement from "../components/KennyElement";
import React from "react";

export class Jumper {
  playerName = "";
  shotJumpers = 0;
  boardWidth = 0;
  isDead = false;
  position = Math.random() * this.boardWidth;
  timeout = 1000 + Math.random() * 5000;
  jumpTime = 3 + Math.random() * 3;
  jumperImage;

  constructor(boardWidth: number, jumperImage: string) {
    this.boardWidth = boardWidth;
    this.jumperImage = jumperImage;
  }

  /*createJumper() {
    return (
      <KennyElement
        countDeadKennys={countDeadKennys}
        position={Math.random() * boardWidth}
        timeout={1000 + Math.random() * 5000}
        jumpTime={3 + Math.random() * 3}
        elementImage={kennyImage}
      />
    );
  }*/
  /* resetBoard() {}

      showStatus() {}

      finishedBoard() {}*/
}
