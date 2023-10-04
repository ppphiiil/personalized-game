import { Game } from "./game-service/game-service";
import { Player } from "./player-service/player-service";
import React from "react";
import { createUseContextHook } from "../utils/createUseContextHook";

export interface Services {
  gameService: Game;
  /* playerService: Player; todo delete*/
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
