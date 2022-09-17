import { Jumper } from "../jumpers/Jumper";
import { JumperPhil } from "../jumpers/jumper-phil/JumperPhil";
import { Player } from "../player-service";
import { v4 as uuidv4 } from "uuid";
import { IJumper } from "../../components/jumperComponent/JumperComponent";
import kennyImage from "../../svg/kenny.png";
import soundKenny from "../../assets/audio/kenny/hui.wav";
import { JumperKenny } from "../jumpers/jumper-kenny/JumperKenny";
const sound = new Audio(soundKenny);

export interface GameInfos {
  isGameRunning: boolean;
  countDown: number;
  gameDuration: number;
  amountOfJumpers: number;
  score: number;
  jumpersArray: Jumper[];
}

export type Listener = (gameInfos: GameInfos) => void;
console.log("render Game Class");
export class Game {
  public isGameRunning = false;
  private countDown: number = 0;
  public gameDuration: number = 0;
  private listeners: Record<string, Listener> = {};
  public amountOfJumpers: number = 0;
  public score: number = 0;
  public jumpersArray: Jumper[] = [];

  constructor() {}

  startNewGame(): void {
    this.gameDuration = 10;
    this.startCountDown(this.gameDuration);
    this.amountOfJumpers = 1;
    this.createJumpersForGame(this.amountOfJumpers, this.gameDuration);
  }

  createJumpersForGame = (amountOfJumpers: number, duration: number) => {
    let jumpers: Jumper[] = [];
    const newPhil = new JumperPhil(() => {
      if (this.isGameRunning) {
        this.score--;
        this.updateListener();
      }
    });
    for (let i = 0; i < amountOfJumpers; i++) {
      const newKenny = new JumperKenny(() => {
        if (this.isGameRunning) {
          this.score++;
          this.updateListener();
        }
      });

      console.log("newJumper", newKenny);
      jumpers.push(newKenny);
    }
    jumpers.push(newPhil);
    this.jumpersArray = jumpers;
  };

  /* jumpTime: Math.random() * duration * 1000,
              position: Math.random() * boardWidth,
              jumpDuration: 3 + Math.random() * 3,
              jumperImage: kennyImage,
              animation: this.animateJumper(50, 7),
              onShotJumper: () => {
                    if (this.isGameRunning) {
                          this.score++;
                          this.updateListener();
                    }
              },*/

  set setIsGameRunning(set: boolean) {
    this.isGameRunning = set;
  }

  logInfos() {
    console.log("----- log------");
    console.log("this.isGameRunning", this.isGameRunning);
    console.log("countDown", this.countDown);
    console.log("jumpersArray", this.jumpersArray);
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
        score: this.score,
        jumpersArray: this.jumpersArray,
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
        this.jumpersArray = [];
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
