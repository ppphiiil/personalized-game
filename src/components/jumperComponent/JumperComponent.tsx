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

const JumperContainer = styled("div")({
  position: "absolute",
  width: "150px",
  height: "200px",
  bottom: "-200px",
  backgroundColor: "blue",
  transition: "all 2s ease-in-out",
});

export interface IJumper {
  position: number;
  jumpTime: number;
  jumpDuration: number;
  jumperImage: string;
  onShotJumper: () => void;
  animation: any;
  sound: HTMLAudioElement;
}
export default function JumperComponent({
  position,
  jumpTime,
  jumpDuration,
  jumperImage,
  onShotJumper,
  sound,
  animation,
}: IJumper) {
  console.log("jumperComponent---->", animation);

  //todonext jumper class
  const [goUp, setGoUp] = useState(false);
  const [dead, setDead] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setGoUp(true);
    }, jumpTime);
  }, []);

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

  let AnimatedJumper = styled.img`
    ${!dead
      ? goUp === true
        ? () => {
            /*todo stimmt die zeit*/
            setTimeout(() => sound.play(), jumpDuration - 2000);
            return animationJumper;
          }
        : animationShowHead
      : null}
  `;

  const killJumper = (
    e: MouseEvent<HTMLImageElement>,
    countDeadKennys: () => void
  ) => {
    setGoUp(false);
    setDead(true);
    countDeadKennys();
  };

  //const goUp = {animation: `${2+(Math.random()*3)}s cubic-bezier(0.500, -0.020, 0.280, 1.010) ${Math.random()*2}s  ${kennyUpDown}`}
  //const goWaiting = {animation: animationWaiting}

  return (
    <JumperContainer style={{ left: `${position}px` }}>
      <AnimatedJumper
        ref={ref}
        onClick={(e: MouseEvent<HTMLImageElement>) =>
          killJumper(e, onShotJumper)
        }
        src={jumperImage}
      />
    </JumperContainer>
  );
}
