import { Game } from "./game-service/game-service";
import { Player } from "./player-service";
import { Services } from "./ServiceProvider";

const player = new Player("Player1");

const game = new Game();

export const services: Services = {
  playerService: player,
  gameService: game,
};
