import { isUndefined, omitBy } from "lodash";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_LOCAL_API_URL;

export class Player {
  level = 0;
  name = "";
  shotJumpers = 0;

  private setName(name: string) {
    this.name = name;
  }
  setLevel(level: number) {
    this.level = level;
  }

  public async updateResult(id: string, result: number) {
    if (baseUrl) {
      const request = new Request(
        makeUrl(`/api/v1/ranking/${id}`, baseUrl).toString(),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ result: result }),
        }
      );

      try {
        /*todo typescript*/
        await fetch(request);
      } catch (error) {
        console.log("ERROR", error);
        throw new Error("Error while send result");
      }
    } else {
      console.log("No REACT_APP_API_URL");
      throw new Error("No REACT_APP_API_URL");
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

const makeUrl = (path: string, baseUrl: string, queryParams?: any): URL => {
  const url = new URL(path, baseUrl);
  if (queryParams) {
    url.search = new URLSearchParams(
      omitBy(queryParams, isUndefined)
    ).toString();
  }
  return url;
};
