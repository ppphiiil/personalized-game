import { Jumper } from "../jumper-service/Jumper";
import { JumperPhil } from "../jumper-service/jumper-phil/JumperPhil";
import { v4 as uuidv4 } from "uuid";
import { IJumper } from "../../components/jumperComponent/JumperComponent";
import kennyImage from "../../svg/kenny.png";
import soundKenny from "../../assets/audio/kenny/hui.wav";
import { JumperKenny } from "../jumper-service/jumper-kenny/JumperKenny";
import { isUndefined, omitBy } from "lodash";
import { Player } from "../player-service/player-service";
import { log } from "util";
import { baseUrl } from "../../App";
import { makeUrl } from "src/utils/makeUrl";
const sound = new Audio(soundKenny);

interface Controler {
  buttonText: string;
  title: string;
  description: string;
  onClick: () => void;
}
export interface GameInfos {
  isGameRunning: boolean;
  countDown: number;
  gameDuration: number;
  amountOfJumpers: number;
  levelScore: number;
  totalScore: number;
  jumpersArray: Jumper[];
  level: number;
  controlerBoard: Controler | undefined;
}

export type Listener = (gameInfos: GameInfos) => void;
export class Game {
  private isGameRunning = false;
  private countDown: number = 0;
  private gameDuration: number = 0;
  private listeners: Record<string, Listener> = {};
  private amountOfJumpers: number = 0;
  private levelScore: number = 0;
  private totalScore: number = 0;
  private jumpersArray: Jumper[] = [];
  private level: number = 1;
  private controlerBoard: Controler | undefined = undefined;
  private player: Player;

  constructor(private playerInstance: Player) {
    this.init();
    this.player = playerInstance;
  }

  get _jumpersArray() {
    return this.jumpersArray;
  }

  async init() {
    console.log("INIT");
    this.isGameRunning = false;
    const gameStateString = localStorage.getItem("game");
    if (typeof gameStateString === "string") {
      const gameState = JSON.parse(gameStateString);
      if (gameState) {
        this.isGameRunning = gameState.isGameRunning;
        this.countDown = gameState.countDown;
        this.gameDuration = gameState.gameDuration;
        this.amountOfJumpers = gameState.amountOfJumpers;
        this.levelScore = gameState.levelScore;
        this.totalScore = gameState.totalScore;
        this.jumpersArray = gameState.jumpersArray;
        this.level = gameState.level;
        this.controlerBoard = gameState.controlerBoard;
      }

      this.startNewLevel();
    }
  }

  async createPlayer(firstName: string, fightName: string): Promise<void> {
    console.log("CREATE PLAYER");
    return await this.player.createPlayer(firstName, fightName);
  }

  private async updateScore(id: string, level: number, levelScore: number) {
    this.totalScore = await this.player.updateScore(id, level, levelScore);
    this.updateListener();
  }

  //todo typescript
  async getRanking(): Promise<any> {
    const request = new Request(
      makeUrl(`/api/v1/ranking/`, baseUrl).toString(),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      /*todo typescript*/
      const response = await fetch(request);
      if (response) {
        const data: any = await response.json();
        return data.ranking;
      } else {
        throw new Error("Error while getting response");
      }
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Error while fetch");
    }
  }

  startNewLevel() {
    console.log("STARTNEWLEVEL");
    switch (this.level) {
      case 1:
        this.controlerBoard = {
          title: "Kenny´s du auslöschen musst!",

          description: "Schieße so viele Kenny's ab, wie du kannst.",
          buttonText: "Start 1",
          onClick: () => this.startNewGame(10000, 1),
        };
        console.log("LEVEL1");
        this.updateListener();
        console.log("LEVEL1");
        break;
      case 2:
        console.log("start level 2");

        this.controlerBoard = {
          buttonText: "Start 2",
          title: "Kenny´s du auslöschen musst!",
          description: "Schieße so viele Kenny's ab, wie du kannst.",
          onClick: () => this.startNewGame(10000, 3),
        };
        console.log("LEVEL2");
        this.updateListener();
        console.log("LEVEL2");

        break;
      case 3:
        console.log("start level 2");
        this.controlerBoard = {
          buttonText: "Start",
          title: "Kenny´s du auslöschen musst!",
          description: "Schieße so viele Kenny's ab, wie du kannst.",
          onClick: () => this.startNewGame(15000, 6, true),
        };
        this.updateListener();

        break;
      case 4:
        console.log("start level 2");
        this.controlerBoard = {
          buttonText: "Start",
          title: "Kenny´s du auslöschen musst!",
          description: "Schieße so viele Kenny's ab, wie du kannst.",
          onClick: () => this.startNewGame(15000, 8, true),
        };
        this.updateListener();

        break;
      case 5:
        console.log("start level 2");
        this.controlerBoard = {
          buttonText: "Start",
          title: "Kenny´s du auslöschen musst!",
          description: "Schieße so viele Kenny's ab, wie du kannst.",
          onClick: () => this.startNewGame(19000, 11, true),
        };
        this.updateListener();

        break;
      default:
        this.controlerBoard = {
          buttonText: "Beenden",
          title: "Du Alle Kenny´s erwischt hast.",
          description: "Nix weiter für dich zu tun gibt",
          onClick: () => console.log("END"),
        };
        this.updateListener();
        break;
    }
  }
  goToNextLevel() {
    console.log("GOTONEXTLEVEL");
    this.level++;
    this.startNewLevel();
  }

  startNewGame(
    duration: number,
    jumpers: number,
    showSpecialJumpers: boolean = false
  ): void {
    console.log("STARTNEWGAME");
    this.isGameRunning = true;
    this.levelScore = 0;
    this.gameDuration = duration;
    this.amountOfJumpers = jumpers;
    this.createJumpersForGame(this.amountOfJumpers, showSpecialJumpers);
    this.startCountDown(this.gameDuration, () => {
      this.isGameRunning = false;
      this.jumpersArray = [];

      console.log(" this.level", this.level);
      this.updateScore(
        localStorage.getItem("id") ?? "",
        this.level,
        this.levelScore
      );
      console.log(" this.level", this.level);
      if (this.amountOfJumpers === this.levelScore) {
        console.log(" this.level in next", this.level);
        //next level
        this.goToNextLevel();

        this.updateListener();
        //congratulation
      } else {
        //Try Again
        /*todo wenn click dann zurücksetzen sonst alte shots nicht zurückgesetzt*/
        this.controlerBoard = {
          buttonText: "Wiederholen",
          title: "Du nicht alle Kenny´s erwischt, du hast!",
          description: "Probiere es noch einmal.",
          onClick: () =>
            this.startNewGame(duration, jumpers, showSpecialJumpers),
        };
      }

      this.updateListener();
    });
  }

  createJumpersForGame = (
    amountOfJumpers: number,
    showSpecialJumpers: boolean
  ) => {
    let jumpers: Jumper[] = [];
    console.log("RENDER createJumpersForGame");
    // crate kenny jumpers
    for (let i = 0; i < amountOfJumpers; i++) {
      console.log(`Render create kenny ${i}`);
      const newKenny = new JumperKenny(() => {
        console.log(`Render Shot kenny ${i}`);
        if (this.isGameRunning) {
          this.levelScore++;
          this.updateListener();
        }
      }, window.innerHeight * 0.8);

      jumpers.push(newKenny);
    }

    if (showSpecialJumpers) {
      /*todo make more jumpers*/
      const newPhil = new JumperPhil(() => {
        if (this.isGameRunning) {
          this.levelScore--;
          this.updateListener();
        }
      });

      jumpers.push(newPhil);
    }

    this.jumpersArray = jumpers;
  };

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
    localStorage.setItem(
      "game",
      JSON.stringify({
        isGameRunning: this.isGameRunning,
        countDown: this.countDown,
        gameDuration: this.gameDuration,
        amountOfJumpers: this.amountOfJumpers,
        levelScore: this.levelScore,
        totalScore: this.totalScore,
        jumpersArray: this.jumpersArray,
        level: this.level,
        controlerBoard: this.controlerBoard,
      })
    );
    Object.values(this.listeners).forEach((listener) =>
      listener({
        isGameRunning: this.isGameRunning,
        countDown: this.countDown,
        gameDuration: this.gameDuration,
        amountOfJumpers: this.amountOfJumpers,
        levelScore: this.levelScore,
        totalScore: this.totalScore,
        jumpersArray: this.jumpersArray,
        level: this.level,
        controlerBoard: this.controlerBoard,
      })
    );
  }

  startCountDown(ms: number, onStoppedTimer: () => void): void {
    const countDownDate = new Date().getTime() + ms;
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      //const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor(((timeleft % (1000 * 60)) - 10) / 1000);
      if (timeleft <= 0) {
        onStoppedTimer();

        clearInterval(timerId);
      }
      console.log("updateListener");
      this.updateListener(); /*so i dont need a state management, because updateing all seconds*/
      this.countDown = seconds;
    }, 1000);
  }
}
