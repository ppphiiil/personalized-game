import { Jumper } from "../Jumper";
import kennyImage from "../../../svg/kenny.png";
import kenny from "../../../assets/audio/kenny/hui.wav";

export class JumperKenny extends Jumper {
  constructor(onShotJumper: () => void) {
    super(kennyImage, onShotJumper);
    //todo jumpDuration soll gameDuration sein
    this.animation = this.animateJumper(
      30,
      2000,
      450 /*todo height from display*/,
      4000
    );
    this.onPlaySound = () => {
      const sound = new Audio(kenny);
      console.log("play sound");
      // todo sound.play();
      //setTimeout(() => sound.play(), 500);
      //setTimeout(() => , 1000);
    };
  }
}
