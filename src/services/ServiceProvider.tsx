import { Game } from "./game-service";
import { Board } from "./board-service";
import { Player } from "./player-service";
import React from "react";
import { createUseContextHook } from "./createUseContextHook";

export interface Services {
  gameService: Game;
  boardService: Board;
  playerService: Player;
}

interface Props {
  children: React.ReactNode;
  services: Services;
}

const ServiceContext = React.createContext<Services | null>(null);
ServiceContext.displayName = "ServiceContext";

export const ServiceProvider = ({ children, services }: Props) => {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};
export const useServices = createUseContextHook(ServiceContext);
