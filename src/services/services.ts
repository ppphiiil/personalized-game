import { Board } from "./board-service";
import { Game } from "./game-service";
import { Player } from "./player-service";
import { Services } from "./ServiceProvider";

console.log("render service");
const player = new Player("Player1");
const board = new Board();
const game = new Game();

export const services: Services = {
  playerService: player,
  gameService: game,
  boardService: board,
};
