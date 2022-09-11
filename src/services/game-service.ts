import { Player } from "./player-service";
import { v4 as uuidv4 } from "uuid";
import { Board } from "./board-service";
import { JumperType } from "../components/Jumper";
import kennyImage from "../svg/kenny.png";

export interface GameInfos {
  isGameRunning: boolean;
  countDown: number;
  gameDuration: number;
  amountOfJumpers: number;
}
export type Listener = (gameInfos: GameInfos) => void;
console.log("render Game Class");
export class Game {
  public isGameRunning = false;
  private countDown: number = 0;
  public gameDuration: number = 0;
  private listeners: Record<string, Listener> = {};
  public amountOfJumpers: number = 0;

  constructor() {}

  startNewGame(): void {
    this.gameDuration = 10;
    this.startCountDown(this.gameDuration);
    this.amountOfJumpers = 10;
  }

  createJumpersForGame = (
    amountOfJumpers: number,
    duration: number,
    boardWidth: number
  ): JumperType[] => {
    let jumpers = [];
    for (let i = 0; i < amountOfJumpers; i++) {
      jumpers.push({
        jumpTime: Math.random() * duration * 1000,
        position: Math.random() * boardWidth,
        jumpDuration: 3 + Math.random() * 3,
        jumperImage: kennyImage,
      });
    }
    return jumpers;
  };

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
    this.updateListener();
    return id;
  }

  removeListener(id: string) {
    delete this.listeners[id];
  }

  private updateListener() {
    Object.values(this.listeners).forEach((listener) =>
      listener({
        isGameRunning: this.isGameRunning,
        countDown: this.countDown,
        gameDuration: this.gameDuration,
        amountOfJumpers: this.amountOfJumpers,
      })
    );
  }

  startCountDown(seconds: number): void {
    this.isGameRunning = true;

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
