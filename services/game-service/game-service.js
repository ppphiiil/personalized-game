"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var JumperPhil_1 = require("../jumpers/jumper-phil/JumperPhil");
var uuid_1 = require("uuid");
var hui_wav_1 = __importDefault(require("../../assets/audio/kenny/hui.wav"));
var JumperKenny_1 = require("../jumpers/jumper-kenny/JumperKenny");
var sound = new Audio(hui_wav_1.default);
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.isGameRunning = false;
        this.countDown = 0;
        this.gameDuration = 0;
        this.listeners = {};
        this.amountOfJumpers = 0;
        this.score = 0;
        this.jumpersArray = [];
        this.level = 1;
        this.controlerBoard = undefined;
        this.createJumpersForGame = function (amountOfJumpers) {
            var jumpers = [];
            var newPhil = new JumperPhil_1.JumperPhil(function () {
                if (_this.isGameRunning) {
                    _this.score--;
                    _this.updateListener();
                }
            });
            for (var i = 0; i < amountOfJumpers; i++) {
                var newKenny = new JumperKenny_1.JumperKenny(function () {
                    if (_this.isGameRunning) {
                        _this.score++;
                        _this.updateListener();
                    }
                });
                jumpers.push(newKenny);
            }
            jumpers.push(newPhil);
            _this.jumpersArray = jumpers;
        };
        this.init();
    }
    Object.defineProperty(Game.prototype, "_jumpersArray", {
        get: function () {
            return this.jumpersArray;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.init = function () {
        this.controlerBoard = {
            buttonText: "Start",
            title: "Kenny´s du auslöschen musst!",
            description: "Schieße so viele Kenny's ab, wie du kannst.",
        };
    };
    Game.prototype.startGame = function () {
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
    };
    Game.prototype.goToNextLevel = function () {
        this.controlerBoard = {
            buttonText: "Start",
            title: "Mehr Kenny´s du auslöschen musst!",
            description: "Erwisch alle Kenny´s",
        };
        this.level++;
    };
    Game.prototype.startNewGame = function (duration, jumpers) {
        this.gameDuration = duration;
        this.amountOfJumpers = jumpers;
        this.createJumpersForGame(this.amountOfJumpers);
        this.startCountDown(this.gameDuration);
    };
    Object.defineProperty(Game.prototype, "setIsGameRunning", {
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
        set: function (set) {
            this.isGameRunning = set;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.addListener = function (listener) {
        var id = (0, uuid_1.v4)();
        this.listeners[id] = listener;
        this.updateListener();
        return id;
    };
    Game.prototype.removeListener = function (id) {
        delete this.listeners[id];
    };
    Game.prototype.updateListener = function () {
        var _this = this;
        Object.values(this.listeners).forEach(function (listener) {
            return listener({
                isGameRunning: _this.isGameRunning,
                countDown: _this.countDown,
                gameDuration: _this.gameDuration,
                amountOfJumpers: _this.amountOfJumpers,
                score: _this.score,
                jumpersArray: _this.jumpersArray,
                level: _this.level,
                controlerBoard: _this.controlerBoard,
            });
        });
    };
    Game.prototype.startCountDown = function (ms) {
        var _this = this;
        this.isGameRunning = true;
        var countDownDate = new Date().getTime() + ms;
        var timerId = setInterval(function () {
            var now = new Date().getTime();
            var timeleft = countDownDate - now;
            //const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor(((timeleft % (1000 * 60)) - 10) / 1000);
            if (timeleft <= 0) {
                _this.isGameRunning = false;
                _this.jumpersArray = [];
                clearInterval(timerId);
                if (_this.amountOfJumpers === _this.score) {
                    _this.goToNextLevel();
                    //congratulation
                }
                else {
                    //Try Again
                    _this.controlerBoard = {
                        buttonText: "Wiederholen",
                        title: "Du nicht alle Kenny´s erwischt, du hast!",
                        description: "Probiere es noch einmal.",
                    };
                }
                _this.updateListener();
                return;
            }
            _this.updateListener();
            _this.countDown = seconds;
        }, 1000);
    };
    return Game;
}());
exports.Game = Game;
