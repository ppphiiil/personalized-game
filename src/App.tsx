import React, { useEffect, useState, useRef } from "react";
import KennyElement from "./components/KennyElement";
import kennyImage from "./svg/kenny.png";
import { Board } from "./components/Board";
import "./App.css";
import { Player } from "./services/player-service";
import { Game } from "./services/game-service";
import { ServiceProvider } from "./services/ServiceProvider";
import { services } from "./services/services";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <ServiceProvider services={services}>
      <GamePage />
    </ServiceProvider>
  );
}

export default App;
