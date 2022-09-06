import { Player } from "./player-service";
import { v4 as uuidv4 } from "uuid";
import { Board } from "./board-service";

interface GameInfos {
  isGameRunning: boolean;
}
export type Listener = (gameInfos: GameInfos) => void;

export class Game {
  private player;
  private board;
  public isGameRunning = false;
  private listeners: Record<string, Listener> = {};

  constructor(player: Player, board: Board) {
    this.player = player;
    this.board = board;
  }

  startNewGame() {
    //start a time
    console.log("this.board.countdownElement", this.board.countdownElement);
    if (this.board.countdownElement !== null) {
      this.startCountDown(5, this.board.countdownElement);
    }
    console.log("click");
  }

  set setIsGameRunning(set: boolean) {
    this.isGameRunning = set;
  }

  logInfos() {
    console.log("----- log------");
    console.log("this.player::", this.player);
    console.log(" this.isGameRunning::", this.isGameRunning);
    console.log("--------------");
  }

  addListener(listener: (variable: GameInfos) => void) {
    const id = uuidv4();
    this.listeners[id] = listener;
    return id;
  }

  removeListener(id: string) {
    delete this.listeners[id];
  }

  private updateListener() {
    Object.values(this.listeners).forEach((listener) =>
      listener({ isGameRunning: this.isGameRunning })
    );
  }

  async startCountDown(seconds: number, display: Element): Promise<boolean> {
    this.isGameRunning = true;
    this.updateListener();
    this.logInfos();

    return await new Promise<boolean>((resolve) => {
      const countDownDate = new Date().getTime() + seconds * 1000 + 2000;
      const timerId = setInterval(() => {
        const now = new Date().getTime();
        const timeleft = countDownDate - now;

        //const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor(((timeleft % (1000 * 60)) - 10) / 1000);
        if (timeleft <= 0) {
          this.isGameRunning = false;
          this.updateListener();
          this.logInfos();
          clearInterval(timerId);
          resolve(true);
          return;
        }
        display.textContent = seconds.toString();
      }, 1000);
    });
  }
}
