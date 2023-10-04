import { Jumper } from "../Jumper";
import philImage from "../../../svg/phil.png";
import phil from "../../../assets/audio/phil/phil.wav";

export class JumperPhil extends Jumper {
  constructor(onShotJumper: () => void) {
    super(philImage, onShotJumper);
    this.animation = this.animateJumper(50, 2000, 450, 5000);
    this.onPlaySound = () => {
      const sound = new Audio(phil);
      // todo sound.play();
    };
  }
}
