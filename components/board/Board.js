"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Board.css");
var react_1 = require("react");
var JumperComponent_1 = __importDefault(require("../jumperComponent/JumperComponent"));
var styled_components_1 = __importDefault(require("styled-components"));
var InfoContainer = (0, styled_components_1.default)("div")({
    display: "flex",
    position: "absolute",
    top: "0px",
    left: "0px",
});
var Board = function (_a) {
    var jumpers = _a.jumpers, onStartGame = _a.onStartGame, gameInfos = _a.gameInfos;
    var _b = (0, react_1.useState)([]), jumperElements = _b[0], setJumperElements = _b[1];
    var boardRef = (0, react_1.useRef)(null);
    var boardWidth = 0;
    (0, react_1.useEffect)(function () {
        if (boardRef.current) {
            boardWidth = boardRef.current.offsetWidth - 80;
        }
    });
    (0, react_1.useEffect)(function () {
        setJumperElements(jumpers.map(function (jumper) {
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: gameInfos && ((0, jsx_runtime_1.jsx)(JumperComponent_1.default, { position: Math.random() * boardWidth, jumpAt: Math.random() *
                        (gameInfos.gameDuration - jumper._animationDuration), jumperImage: jumper.jumperImage, onShotJumper: jumper.onShotJumper, onPlaySound: jumper.onPlaySound, animation: jumper.animation })) }));
        }));
    }, [jumpers]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ ref: boardRef, id: "board", className: "board" }, { children: [(0, jsx_runtime_1.jsxs)(InfoContainer, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { padding: 10 } }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ style: { opacity: 0.5 } }, { children: "Time" })), (0, jsx_runtime_1.jsx)("h2", __assign({ style: { textAlign: "center" } }, { children: gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.countDown }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { padding: 10 } }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ style: { opacity: 0.5 } }, { children: "Shots" })), (0, jsx_runtime_1.jsx)("h2", { children: (gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.score) + " of " + (gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.amountOfJumpers) }), " "] }))] }), !(gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.isGameRunning) && (gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.controlerBoard) && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "boardStartDialog" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: gameInfos.controlerBoard.title }), (0, jsx_runtime_1.jsx)("p", { children: gameInfos.controlerBoard.description }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "button", onClick: onStartGame }, { children: gameInfos.controlerBoard.buttonText })), (0, jsx_runtime_1.jsx)("p", { children: "Level ".concat(gameInfos === null || gameInfos === void 0 ? void 0 : gameInfos.level) })] }))), jumperElements.map(function (jumper) {
                return jumper;
            })] })));
};
exports.Board = Board;
