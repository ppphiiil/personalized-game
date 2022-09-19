import { Jumper } from "../jumpers/Jumper";
import { JumperPhil } from "../jumpers/jumper-phil/JumperPhil";
import { Player } from "../player-service";
import { v4 as uuidv4 } from "uuid";
import { IJumper } from "../../components/jumperComponent/JumperComponent";
import kennyImage from "../../svg/kenny.png";
import soundKenny from "../../assets/audio/kenny/hui.wav";
import { JumperKenny } from "../jumpers/jumper-kenny/JumperKenny";
const sound = new Audio(soundKenny);

interface Controler {
  buttonText: string;
  title: string;
  description: string;
}
export interface GameInfos {
  isGameRunning: boolean;
  countDown: number;
  gameDuration: number;
  amountOfJumpers: number;
  score: number;
  jumpersArray: Jumper[];
  level: number;
  controlerBoard: Controler | undefined;
}

export type Listener = (gameInfos: GameInfos) => void;
export class Game {
  public isGameRunning = false;
  private countDown: number = 0;
  public gameDuration: number = 0;
  private listeners: Record<string, Listener> = {};
  public amountOfJumpers: number = 0;
  public score: number = 0;
  public jumpersArray: Jumper[] = [];
  public level: number = 1;
  private controlerBoard: Controler | undefined = undefined;

  constructor() {
    this.init();
  }

  get _jumpersArray() {
    return this.jumpersArray;
  }

  init() {
    this.controlerBoard = {
      buttonText: "Start",
      title: "Kenny´s du auslöschen musst!",
      description: "Schieße so viele Kenny's ab, wie du kannst.",
    };
  }

  startGame(): void {
    switch (this.level) {
      case 1:
        console.log("start level 1");
        this.startNewGame(15000, 4);
        break;
      case 2:
        console.log("start level 2");
        this.startNewGame(30000, 40);
        break;
    }
  }

  goToNextLevel() {
    this.controlerBoard = {
      buttonText: "Start",
      title: "Mehr Kenny´s du auslöschen musst!",
      description: "Erwisch alle Kenny´s",
    };
    this.level++;
  }

  startNewGame(duration: number, jumpers: number): void {
    this.gameDuration = duration;
    this.amountOfJumpers = jumpers;
    this.createJumpersForGame(this.amountOfJumpers);
    this.startCountDown(this.gameDuration);
  }

  createJumpersForGame = (amountOfJumpers: number) => {
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
        level: this.level,
        controlerBoard: this.controlerBoard,
      })
    );
  }

  startCountDown(ms: number): void {
    this.isGameRunning = true;

    const countDownDate = new Date().getTime() + ms;
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      //const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor(((timeleft % (1000 * 60)) - 10) / 1000);
      if (timeleft <= 0) {
        this.isGameRunning = false;
        this.jumpersArray = [];

        clearInterval(timerId);
        if (this.amountOfJumpers === this.score) {
          this.goToNextLevel();
          //congratulation
        } else {
          //Try Again
          this.controlerBoard = {
            buttonText: "Wiederholen",
            title: "Du nicht alle Kenny´s erwischt, du hast!",
            description: "Probiere es noch einmal.",
          };
        }

        this.updateListener();
        return;
      }
      this.updateListener();
      this.countDown = seconds;
    }, 1000);
  }
}
