import React, {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  MouseEventHandler,
} from "react";
import styled, { keyframes, css } from "styled-components";
// @ts-ignore
import "./Jumper.css";
import { IAnimation } from "../../services/jumpers/Jumper";

const JumperContainer = styled("div")({
  position: "absolute",
  width: "150px",
  height: "200px",
  bottom: "0px",
  transition: "all 2s ease-in-out",
});

export interface IJumper {
  position: number;
  jumpAt: number;
  animationDuration: number;
  jumperImage: string;
  onShotJumper: () => void;
  onPlaySound: () => void;
  animation: IAnimation;
}
export default function JumperComponent({
  position,
  jumpAt,
  jumperImage,
  onShotJumper,
  onPlaySound,
  animation,
}: IJumper) {
  const [goUp, setGoUp] = useState(false);

  const [dead, setDead] = useState(false);
  const animationShowHeadElement = useRef<HTMLImageElement | null>(null);
  const animationJumpHighElement = useRef<HTMLImageElement | null>(null);

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

  useEffect(() => {
    setTimeout(animateJumper, jumpAt);
  }, [animationShowHeadElement.current]);

  const animateJumper = () => {
    const showHeadAnimationKeyFrame = new KeyframeEffect(
      animationShowHeadElement.current, // element to animate
      [
        { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
        {
          bottom: `${animation.headAnimation?.height}px`,
          easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)",
        },
        { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
      ],
      { duration: animation.headAnimation?.duration }
    );

    const showHeadAnimation = new Animation(showHeadAnimationKeyFrame);

    showHeadAnimation.play();

    showHeadAnimation.addEventListener("finish", (event) => {
      onPlaySound();
      const jumpHightAnimationKeyFrame = new KeyframeEffect(
        animationShowHeadElement.current, // element to animate
        [
          { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
          {
            bottom: `${animation.jumpAnimation?.height}px`,
            easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)",
          },
          { bottom: "0px", easing: "cubic-bezier(0.5, 0.02, 0.28, 1.01)" },
        ],
        { duration: animation.jumpAnimation?.duration }
      );

      const jumpHightAnimation = new Animation(jumpHightAnimationKeyFrame);

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
  const killJumper = (countDeadKennys: () => void) => {
    setGoUp(false);
    setDead(true);
    countDeadKennys();
  };

  //const goUp = {animation: `${2+(Math.random()*3)}s cubic-bezier(0.500, -0.020, 0.280, 1.010) ${Math.random()*2}s  ${kennyUpDown}`}
  //const goWaiting = {animation: animationWaiting}

  return (
    <>
      {!dead && (
        <JumperContainer
          ref={animationShowHeadElement}
          style={{
            left: `${position}px`,
            width: "150px",
            height: "0px",
            position: "absolute",
            display: "block",
          }}
        >
          <img
            ref={animationShowHeadElement}
            onClick={(e: MouseEvent<HTMLImageElement>) => {
              killJumper(onShotJumper);
              setDead(true);
            }}
            style={{
              width: "150px",
            }}
            src={jumperImage}
          />

          {/*  <AnimationJumpHigh
            ref={animationJumpHighElement}
            onClick={(e: MouseEvent<HTMLImageElement>) => {
              killJumper(onShotJumper);
              setDead(true);
            }}
            src={jumperImage}
          />*/}
        </JumperContainer>
      )}
    </>
  );
}
