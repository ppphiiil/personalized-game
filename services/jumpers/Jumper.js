"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jumper = void 0;
var Jumper = /** @class */ (function () {
    function Jumper(image, onShotJumper) {
        this.animation = this.animateJumper(50, 7000, 450, 7000);
        this.onShotJumper = function () { };
        this.onPlaySound = function () { };
        this.onShotJumper = onShotJumper;
        this.jumperImage = image;
    }
    Object.defineProperty(Jumper.prototype, "_animationDuration", {
        get: function () {
            var _a, _b, _c, _d;
            if (((_a = this.animation.jumpAnimation) === null || _a === void 0 ? void 0 : _a.duration) !== undefined &&
                ((_b = this.animation.headAnimation) === null || _b === void 0 ? void 0 : _b.duration) !== undefined) {
                var animationDuration = ((_c = this.animation.jumpAnimation) === null || _c === void 0 ? void 0 : _c.duration) +
                    ((_d = this.animation.headAnimation) === null || _d === void 0 ? void 0 : _d.duration);
                return animationDuration;
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Jumper.prototype.animateJumper = function (headHeight, headDuration, jumpHeight, jumpDuration) {
        var headAnimation = {
            height: headHeight,
            duration: headDuration,
        };
        var jumpAnimation = {
            height: jumpHeight - 350 + Math.random() * 350,
            duration: jumpDuration - jumpDuration / 2 + Math.random() * (jumpDuration / 2),
        };
        return { headAnimation: headAnimation, jumpAnimation: jumpAnimation };
    };
    Jumper.prototype.jump = function () { };
    return Jumper;
}());
exports.Jumper = Jumper;
