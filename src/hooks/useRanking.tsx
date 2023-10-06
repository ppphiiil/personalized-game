import React from "react";
import { useServices } from "../services/ServiceProvider";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRanking = (totalScore: number | undefined) => {
  const { gameService } = useServices();
  //todo typescript
  return useQuery<any, Error>(
    ["ranking", totalScore],
    async () => {
      return await gameService.getRanking();
    },
    {
      onSuccess: () => {
        console.log("SUCCESS RANKING");
      },
      onError: (error) => {
        console.log(error);
        console.log("ERROR RANKING");
      },
    }
  );
};
