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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var ServiceProvider_1 = require("./services/ServiceProvider");
var services_1 = require("./services/services");
var GamePage_1 = require("./pages/GamePage");
function App() {
    var mouseCursor = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), click = _a[0], setClick = _a[1];
    window.addEventListener("mousemove", cursor);
    window.addEventListener("mouseup", cursorImage);
    window.addEventListener("mousedown", cursorImage);
    function cursorImage(e) {
        console.log("e.eventPhase", e.type);
        if (e.type === "mousedown") {
            if (mouseCursor.current !== null) {
                console.log("mouseCursor.current", mouseCursor.current);
                mouseCursor.current.style.top = e.pageY - 20 + "px";
                mouseCursor.current.style.left = e.pageX - 20 + "px";
                mouseCursor.current.classList.add("animation");
            }
        }
        else {
            if (mouseCursor.current !== null) {
                console.log("mouseCursor.current", mouseCursor.current);
                mouseCursor.current.style.top = e.pageY - 20 + "px";
                mouseCursor.current.style.left = e.pageX - 20 + "px";
                mouseCursor.current.classList.remove("animation");
            }
        }
    }
    function cursor(e) {
        if (mouseCursor.current !== null) {
            console.log("mouseCursor.current", mouseCursor.current);
            mouseCursor.current.style.top = e.pageY - 20 + "px";
            mouseCursor.current.style.left = e.pageX - 20 + "px";
        }
    }
    return ((0, jsx_runtime_1.jsxs)(ServiceProvider_1.ServiceProvider, __assign({ services: services_1.services }, { children: [(0, jsx_runtime_1.jsx)(GamePage_1.GamePage, {}), (0, jsx_runtime_1.jsx)("div", { ref: mouseCursor, className: "cursor" })] })));
}
exports.default = App;
