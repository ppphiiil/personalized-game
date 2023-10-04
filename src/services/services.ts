import { Game } from "./game-service/game-service";
import { Player } from "./player-service/player-service";
import { Services } from "./ServiceProvider";

const player = new Player();

const game = new Game(player);

export const services: Services = {
  /*playerService: player, todo delete*/
  gameService: game,
};
