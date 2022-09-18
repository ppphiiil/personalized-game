export class Player {
  level = 0;
  name = "";
  shotJumpers = 0;

  constructor(name: string = "Player") {
    this.name = name;
  }

  setLevel(level: number) {
    this.level = level;
  }

  set setShotJumpers(shotJumpers: number) {
    this.shotJumpers = shotJumpers;
  }

  reset() {
    this.level = 0;
    this.shotJumpers = 0;
  }
}
