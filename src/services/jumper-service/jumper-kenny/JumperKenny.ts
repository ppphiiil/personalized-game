import { Jumper } from "../Jumper";
import kennyImage from "../../../svg/kenny.png";
import kenny from "../../../assets/audio/kenny/hui.wav";
console.log("RENDERED KENNY CLASS");

export class JumperKenny extends Jumper {
  constructor(onShotJumper: () => void, jumpHeight: number) {
    super(kennyImage, onShotJumper);
    //todo jumpDuration soll gameDuration sein
    this.animation = this.animateJumper(30, 2000, jumpHeight, 6000);
  }
  onPlaySound = async () => {
    //setTimeout(() => , 1000);
    const sound = new Audio(kenny);
    console.log("play sound");
    //setTimeout(() => sound.play(), 500);
    await sound.play();
  };
}
