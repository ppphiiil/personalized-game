"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseContextHook = void 0;
var react_1 = require("react");
function createUseContextHook(theContext) {
    return function () {
        var context = (0, react_1.useContext)(theContext);
        if (context === null) {
            throw new Error("".concat(theContext.displayName, " is null, wrap your component with a matching Provider"));
        }
        return context;
    };
}
exports.createUseContextHook = createUseContextHook;
