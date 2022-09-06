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

  getStatus() {
    console.log("name:", this.name);
    console.log("shotJumpers:", this.shotJumpers);
    console.log("level:", this.level);
  }
  reset() {
    this.level = 0;
    this.shotJumpers = 0;
  }
}
