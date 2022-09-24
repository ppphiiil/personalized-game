"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JumperKenny = void 0;
var Jumper_1 = require("../Jumper");
var kenny_png_1 = __importDefault(require("../../../svg/kenny.png"));
var hui_wav_1 = __importDefault(require("../../../assets/audio/kenny/hui.wav"));
var JumperKenny = /** @class */ (function (_super) {
    __extends(JumperKenny, _super);
    function JumperKenny(onShotJumper) {
        var _this = _super.call(this, kenny_png_1.default, onShotJumper) || this;
        //todo jumpDuration soll gameDuration sein
        _this.animation = _this.animateJumper(30, 2000, 450 /*todo height from display*/, 4000);
        _this.onPlaySound = function () {
            var sound = new Audio(hui_wav_1.default);
            setTimeout(function () { return sound.play(); }, 500);
            //setTimeout(() => , 1000);
        };
        return _this;
    }
    return JumperKenny;
}(Jumper_1.Jumper));
exports.JumperKenny = JumperKenny;
