import React from "react";
import { useServices } from "src/services/ServiceProvider";
import { useMutation } from "@tanstack/react-query";

export const useStartGame = () => {
  const { gameService } = useServices();
  return useMutation<void, Error, { firstName: string; fightName: string }>(
    async (createPlayerRequest) => {
      await gameService.createPlayer(
        createPlayerRequest.firstName,
        createPlayerRequest.fightName
      );
    },
    {
      onSuccess: () => {
        gameService.startNewLevel();
        console.log("START NEW LEVEL");
      },
      onError: (error) => {
        console.log(error);
        console.log("ERROR WHILE CREATING PLAYER");
      },
    }
  );
};
