"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name) {
        if (name === void 0) { name = "Player"; }
        this.level = 0;
        this.name = "";
        this.shotJumpers = 0;
        this.name = name;
    }
    Player.prototype.setLevel = function (level) {
        this.level = level;
    };
    Object.defineProperty(Player.prototype, "setShotJumpers", {
        set: function (shotJumpers) {
            this.shotJumpers = shotJumpers;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.reset = function () {
        this.level = 0;
        this.shotJumpers = 0;
    };
    return Player;
}());
exports.Player = Player;
