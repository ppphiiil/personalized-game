import { Player } from "./player-service";
import { HTMLProps } from "react";

export class Game {
  player;
  isGameRunning: boolean = false;

  constructor(player: Player) {
    this.player = player;
  }

  async startNewGame() {
    //start timer
  }

  async startCountDown(seconds: number, display: Element): Promise<boolean> {
    return await new Promise((resolve) => {
      const countDownDate = new Date().getTime() + seconds * 1000;
      const countDown = setInterval(function () {
        const now = new Date().getTime();
        const timeleft = countDownDate - now;

        //const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        if (timeleft <= 0) {
          resolve(false);
        } else resolve(true);
        display.textContent = seconds.toString();
      }, 1000);
    });
  }
}
