import React, { useEffect, useState, useRef } from "react";
import JumperComponent from "./components/jumperComponent/JumperComponent";
import kennyImage from "./svg/kenny.png";
import { Board } from "./components/board/Board";
import "./App.css";
import { Player } from "./services/player-service";
import { Game } from "./services/game-service/game-service";
import { ServiceProvider } from "./services/ServiceProvider";
import { services } from "./services/services";
import { GamePage } from "./pages/GamePage";

function App() {
  const mouseCursor = useRef<any>(null);
  const [click, setClick] = useState<boolean>(false);
  window.addEventListener("mousemove", cursor);
  window.addEventListener("mouseup", cursorImage);
  window.addEventListener("mousedown", cursorImage);

  function cursorImage(e: MouseEvent) {
    console.log("e.eventPhase", e.type);

    if (e.type === "mousedown") {
      if (mouseCursor.current !== null) {
        console.log("mouseCursor.current", mouseCursor.current);
        mouseCursor.current.style.top = e.pageY - 20 + "px";
        mouseCursor.current.style.left = e.pageX - 20 + "px";
        mouseCursor.current.classList.add("animation");
      }
    } else {
      if (mouseCursor.current !== null) {
        console.log("mouseCursor.current", mouseCursor.current);
        mouseCursor.current.style.top = e.pageY - 20 + "px";
        mouseCursor.current.style.left = e.pageX - 20 + "px";
        mouseCursor.current.classList.remove("animation");
      }
    }
  }

  function cursor(e: MouseEvent) {
    if (mouseCursor.current !== null) {
      console.log("mouseCursor.current", mouseCursor.current);
      mouseCursor.current.style.top = e.pageY - 20 + "px";
      mouseCursor.current.style.left = e.pageX - 20 + "px";
    }
  }
  return (
    <ServiceProvider services={services}>
      <GamePage />
      <div ref={mouseCursor} className="cursor"></div>
    </ServiceProvider>
  );
}

export default App;
