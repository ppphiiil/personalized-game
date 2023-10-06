import { isUndefined, omitBy } from "lodash";
import { baseUrl } from "src/App";
import { makeUrl } from "src/utils/makeUrl";

export class Player {
  private level = 0;
  private name = "";
  private shotJumpers = 0;

  private setName(name: string) {
    this.name = name;
  }
  setLevel(level: number) {
    this.level = level;
  }

  public async updateScore(
    id: string,
    level: number,
    levelScore: number
  ): Promise<number> {
    const request = new Request(
      makeUrl(`/api/v1/ranking/${id}`, baseUrl).toString(),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ levelScore, level }),
      }
    );

    try {
      /*todo typescript*/
      const response = await fetch(request);
      if (response) {
        const data: any = await response.json();
        return data.totalScore;
      } else {
        throw new Error("Error while getting response");
      }
    } catch (error) {
      console.log("ERROR", error);
      throw new Error("Error while send result");
    }
  }

  public async createPlayer(firstName: string, fightName: string) {
    this.setName(firstName);

    if (baseUrl) {
      const request = new Request(
        makeUrl("/api/v1/player", baseUrl).toString(),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: `${firstName} aka. ${fightName}` }),
        }
      );

      try {
        /*todo typescript*/
        const response = await fetch(request);
        if (response) {
          const newPlayer = await response.json();
          const playerId = newPlayer.player._id;
          localStorage.setItem("id", playerId);
        }
      } catch (error) {
        console.log("ERROR", error);
      }
    } else {
      console.log("No REACT_APP_API_URL");
      throw new Error("No REACT_APP_API_URL");
    }
  }

  set setShotJumpers(shotJumpers: number) {
    this.shotJumpers = shotJumpers;
  }

  reset() {
    this.level = 0;
    this.shotJumpers = 0;
  }
}
