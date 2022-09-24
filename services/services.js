"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
var game_service_1 = require("./game-service/game-service");
var player_service_1 = require("./player-service");
var player = new player_service_1.Player("Player1");
var game = new game_service_1.Game();
exports.services = {
    playerService: player,
    gameService: game,
};
