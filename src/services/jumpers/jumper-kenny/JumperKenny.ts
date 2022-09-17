import { Jumper } from "../Jumper";
import kennyImage from "../../../svg/kenny.png";
import kenny from "../../../assets/audio/kenny/hui.wav";

const sound = new Audio(kenny);

export class JumperKenny extends Jumper {
  constructor(onShotJumper: () => void) {
    super(kennyImage, onShotJumper, sound);
    this.animation = this.animateJumper(20, 1);
  }
}
