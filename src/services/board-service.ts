import { Player } from "./player-service";
import { Game } from "./game-service";

export class Board {
  playerName = "";
  shotJumpers = 0;

  public countdownElement: Element | null = null;

  // hier alle elemente die wir von außen ändern

  constructor(document: Document) {
    console.log("document", document);
    console.log(
      "document.querySelector(#countdown",
      document.querySelector("#countdown")
    );

    const test = new Promise<Element | null>((resolve, reject) =>
      setTimeout(() => {
        resolve(document.querySelector("#countdown"));
      }, 3000)
    );

    const caller = async () => {
      this.countdownElement = await test;
    };
    caller();
    console.log(" this.countdownElement", this.countdownElement);
  }

  /* resetBoard() {}

  showStatus() {}

  finishedBoard() {}*/
}
