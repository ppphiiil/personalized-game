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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
// @ts-ignore
require("./Jumper.css");
var JumperContainer = (0, styled_components_1.default)("div")({
    position: "absolute",
    width: "150px",
    height: "200px",
    bottom: "0px",
    transition: "all 2s ease-in-out",
});
function JumperComponent(_a) {
    var position = _a.position, jumpAt = _a.jumpAt, jumperImage = _a.jumperImage, onShotJumper = _a.onShotJumper, onPlaySound = _a.onPlaySound, animation = _a.animation;
    var _b = (0, react_1.useState)(false), goUp = _b[0], setGoUp = _b[1];
    var _c = (0, react_1.useState)(false), dead = _c[0], setDead = _c[1];
    var animationShowHeadElement = (0, react_1.useRef)(null);
    var animationJumpHighElement = (0, react_1.useRef)(null);
    /*
    function listener(event: any) {
      console.log("Halloooo");
      switch (event.type) {
        case "animationstart":
          break;
        case "animationend":
          console.log("animation 1 - end");
          break;
        case "animationiteration":
          break;
      }
    }*/
    /*
    const showHeadAnimationKeyFrame = new KeyframeEffect(
      animationShowHeadElement.current, // element to animate
      [
        { top: "0px", easing: "ease-in-out" },
        {
          top: `${100}px`,
          easing: "ease-in-out",
        },
        { top: "0px", easing: "ease-in-out" },
      ],
      { duration: 4000 }
    );
  
    const showHeadAnimation = new Animation(
      showHeadAnimationKeyFrame,
      document.timeline
    );
  
    showHeadAnimation.play();
  */
    (0, react_1.useEffect)(function () {
        setTimeout(animateJumper, jumpAt);
    }, [animationShowHeadElement.current]);
    var animateJumper = function () {
        var _a, _b;
        var showHeadAnimationKeyFrame = new KeyframeEffect(animationShowHeadElement.current, // element to animate
        [
            { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
            {
                bottom: "".concat((_a = animation.headAnimation) === null || _a === void 0 ? void 0 : _a.height, "px"),
                easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)",
            },
            { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
        ], { duration: (_b = animation.headAnimation) === null || _b === void 0 ? void 0 : _b.duration });
        var showHeadAnimation = new Animation(showHeadAnimationKeyFrame);
        showHeadAnimation.play();
        showHeadAnimation.addEventListener("finish", function (event) {
            var _a, _b;
            onPlaySound();
            var jumpHightAnimationKeyFrame = new KeyframeEffect(animationShowHeadElement.current, // element to animate
            [
                { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
                {
                    bottom: "".concat((_a = animation.jumpAnimation) === null || _a === void 0 ? void 0 : _a.height, "px"),
                    easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)",
                },
                { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
            ], { duration: (_b = animation.jumpAnimation) === null || _b === void 0 ? void 0 : _b.duration });
            var jumpHightAnimation = new Animation(jumpHightAnimationKeyFrame);
            jumpHightAnimation.play();
        });
    };
    /*
    let showHead = keyframes`
      0% { top: 0px; }
      50% { top: ${animation.showHeadAnimation.height}px; }
      100% { top: 0px; }
  `;
  
    const animationShowHead = css`
      animation: ${showHead} ${animation.showHeadAnimation.duration}s ease-in-out;
      width: 150px;
      top: 0px;
      position: absolute;
      display: block;
    `;
  
    let animationJump = keyframes`
      0% { top: 0px; }
      50% { top: ${Math.random() * 350 - 450}px; }
      100% { top: 0px; }
  `;
  
    const animationJumper = css`
      animation: ${jumpDuration}s cubic-bezier(0.5, 0.02, 0.28, 1.01)
        ${Math.random() * 2}s ${animationJump};
      width: 150px;
      top: 0px;
      position: absolute;
      display: block;
      transition: all 2s ease-in-out;
    `;
  
    let AnimationJumpHigh = styled.img`
      ${() => {
        /!*todo stimmt die zeit*!/
        setTimeout(() => sound.play(), jumpDuration);
        console.log("xxxAnimationJumpHigh");
        return animationJumper;
      }}
    `;
  */
    /*  let AnimationShowHead = styled.img`
      ${() => {
        console.log("xxxAnimationShowHead");
        return animationShowHead;
      }}
    `;*/
    var killJumper = function (countDeadKennys) {
        setGoUp(false);
        setDead(true);
        countDeadKennys();
    };
    //const goUp = {animation: `${2+(Math.random()*3)}s cubic-bezier(0.500, -0.020, 0.280, 1.010) ${Math.random()*2}s  ${kennyUpDown}`}
    //const goWaiting = {animation: animationWaiting}
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !dead && ((0, jsx_runtime_1.jsx)(JumperContainer, __assign({ ref: animationShowHeadElement, style: {
                left: "".concat(position, "px"),
                width: "150px",
                height: "0px",
                position: "absolute",
                display: "block",
            } }, { children: (0, jsx_runtime_1.jsx)("img", { ref: animationShowHeadElement, onClick: function (e) {
                    killJumper(onShotJumper);
                    setDead(true);
                }, style: {
                    width: "150px",
                }, src: jumperImage }) }))) }));
}
exports.default = JumperComponent;
