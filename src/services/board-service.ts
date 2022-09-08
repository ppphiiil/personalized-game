import { Player } from "./player-service";
import { Game } from "./game-service";

export class Board {
  playerName = "";
  shotJumpers = 0;
  boardRef: any;

  public countdownElement: Element | null = null;

  // hier alle elemente die wir von außen ändern

  constructor() {}

  /* resetBoard() {}

  showStatus() {}

  finishedBoard() {}*/
}
