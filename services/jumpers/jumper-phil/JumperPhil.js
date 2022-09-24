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
exports.JumperPhil = void 0;
var Jumper_1 = require("../Jumper");
var phil_png_1 = __importDefault(require("../../../svg/phil.png"));
var phil_wav_1 = __importDefault(require("../../../assets/audio/phil/phil.wav"));
var JumperPhil = /** @class */ (function (_super) {
    __extends(JumperPhil, _super);
    function JumperPhil(onShotJumper) {
        var _this = _super.call(this, phil_png_1.default, onShotJumper) || this;
        _this.animation = _this.animateJumper(50, 2000, 450, 5000);
        _this.onPlaySound = function () {
            var sound = new Audio(phil_wav_1.default);
            sound.play();
        };
        return _this;
    }
    return JumperPhil;
}(Jumper_1.Jumper));
exports.JumperPhil = JumperPhil;
