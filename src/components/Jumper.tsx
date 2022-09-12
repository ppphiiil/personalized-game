import React, {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  MouseEventHandler,
} from "react";
import styled, { keyframes, css } from "styled-components";
// @ts-ignore
import hui from "./hui.wav";
import "./style/Jumper.css";

export interface JumperType {
  position: number;
  jumpTime: number;
  jumpDuration: number;
  jumperImage: string;
  onShotJumper: () => void;
}
export default function Jumper({
  position,
  jumpTime,
  jumpDuration,
  jumperImage,
  onShotJumper,
}: JumperType) {
  console.log("Jumper---->");
  const [goUp, setGoUp] = useState(false);
  const [dead, setDead] = useState(false);

  const kennyJumpSound = new Audio(hui);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setGoUp(true);
    }, jumpTime);
  }, []);

  let showHead = keyframes`
    0% { top: 0px; }
    50% { top: -10px; }
    100% { top: 0px; }
`;

  const AnimationShowHead = css`
    animation: ${showHead} 2s ease-in-out;
  `;

  let kennyUpDown = keyframes`
    0% { top: 0px; }
    50% { top: ${Math.random() * 350 - 450}px; }
    100% { top: 0px; }
`;

  const AnimationKennyUpDown = css`
    animation: ${jumpDuration}s cubic-bezier(0.5, 0.02, 0.28, 1.01)
      ${Math.random() * 2}s ${kennyUpDown};
  `;

  let AnimatedImg = styled.img`
    /* This is an example of a nested interpolation */

    ${!dead
      ? goUp === true
        ? () => {
            setTimeout(() => kennyJumpSound.play(), 2000);
            return AnimationKennyUpDown;
          }
        : AnimationShowHead
      : null}
  `;

  let StyledAnimatedImage = styled(AnimatedImg)({
    width: "150px",
    top: "0px",
    position: "absolute",
    display: "block",
    transition: "all 2s ease-in-out",
  });

  const clickOnKenny = (
    e: MouseEvent<HTMLImageElement>,
    countDeadKennys: () => void
  ) => {
    console.log("e.target", e.target);
    console.log("ref", ref.current);
    setGoUp(false);

    console.log("Shot");
    setDead(true);
    console.log("dead", dead);
    countDeadKennys();
  };

  //const goUp = {animation: `${2+(Math.random()*3)}s cubic-bezier(0.500, -0.020, 0.280, 1.010) ${Math.random()*2}s  ${kennyUpDown}`}
  //const goWaiting = {animation: animationWaiting}

  return (
    <div style={{ left: `${position}px` }} className="kennyElement">
      <AnimatedImg
        ref={ref}
        onClick={(e: MouseEvent<HTMLImageElement>) =>
          clickOnKenny(e, onShotJumper)
        }
        className={"kenny"}
        src={jumperImage}
        alt="kenny"
      />
      {/* <button onClick={()=>{setUp(true)}}>Click</button> */}
    </div>
  );
}
