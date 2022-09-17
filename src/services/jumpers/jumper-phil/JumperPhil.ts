import { Jumper } from "../Jumper";
import philImage from "../../../svg/phil.png";
import phil from "../../../assets/audio/phil/phil.wav";

const sound = new Audio(phil);

export class JumperPhil extends Jumper {
  constructor(onShotJumper: () => void) {
    super(philImage, onShotJumper, sound);
    this.animation = this.animateJumper(150, 4);
  }
}
