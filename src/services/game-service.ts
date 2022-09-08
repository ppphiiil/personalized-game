import { Player } from "./player-service";
import { v4 as uuidv4 } from "uuid";
import { Board } from "./board-service";

export interface GameInfos {
  isGameRunning: boolean;
  countDown: number;
}
export type Listener = (gameInfos: GameInfos) => void;

export class Game {
  public isGameRunning = false;
  private countDown: number = 0;
  private listeners: Record<string, Listener> = {};

  constructor() {}

  startNewGame(): void {
    this.startCountDown(5);
  }

  set setIsGameRunning(set: boolean) {
    this.isGameRunning = set;
  }

  createKenny() {}

  logInfos() {
    console.log("----- log------");
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
      listener({ isGameRunning: this.isGameRunning, countDown: this.countDown })
    );
  }

  startCountDown(seconds: number): void {
    this.isGameRunning = true;

    this.logInfos();
    console.log("here");
    const countDownDate = new Date().getTime() + seconds * 1000;
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

        return;
      }
      this.updateListener();
      this.countDown = seconds;
    }, 1000);
  }
}
