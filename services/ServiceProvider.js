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
exports.useServices = exports.ServiceProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var createUseContextHook_1 = require("../utils/createUseContextHook");
var ServiceContext = react_1.default.createContext(null);
ServiceContext.displayName = "ServiceContext";
var ServiceProvider = function (_a) {
    var children = _a.children, services = _a.services;
    return ((0, jsx_runtime_1.jsx)(ServiceContext.Provider, __assign({ value: services }, { children: children })));
};
exports.ServiceProvider = ServiceProvider;
exports.useServices = (0, createUseContextHook_1.createUseContextHook)(ServiceContext);
