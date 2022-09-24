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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Board_1 = require("../components/board/Board");
var ServiceProvider_1 = require("../services/ServiceProvider");
var GamePage = function () {
    var _a;
    var _b = (0, react_1.useState)(0), deadKennysCounter = _b[0], setDeadKennysCounter = _b[1];
    var _c = (0, react_1.useState)(null), gameInfos = _c[0], setGameInfos = _c[1];
    var gameService = (0, ServiceProvider_1.useServices)().gameService;
    var countDeadKennys = function () {
        setDeadKennysCounter(function (deadKennysCounter) { return (deadKennysCounter = deadKennysCounter + 1); });
    };
    (0, react_1.useEffect)(function () {
        var id = gameService.addListener(function (gameinfos) {
            setGameInfos(gameinfos);
        });
        return function () { return gameService.removeListener(id); };
    }, [gameService]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Kennys Game" }), (0, jsx_runtime_1.jsx)(Board_1.Board, { onStartGame: function () {
                    gameService.startGame();
                }, gameInfos: gameInfos, jumpers: (_a = gameService._jumpersArray) !== null && _a !== void 0 ? _a : [] })] })));
};
exports.GamePage = GamePage;
