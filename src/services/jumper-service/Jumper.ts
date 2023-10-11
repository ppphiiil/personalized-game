export interface IAnimation {
  headAnimation: { height: number; duration: number } | null;
  jumpAnimation: { height: number; duration: number } | null;
}
export class Jumper {
  animation: IAnimation = this.animateJumper(50, 7000, 450, 7000);
  jumperImage;

  public onShotJumper: () => void = () => {};
  public onPlaySound: () => void = () => {};

  constructor(image: string, onShotJumper: () => void) {
    this.onShotJumper = onShotJumper;
    this.onPlaySound = this.onPlaySound;
    this.jumperImage = image;
  }

  get _animationDuration() {
    if (
      this.animation.jumpAnimation?.duration !== undefined &&
      this.animation.headAnimation?.duration !== undefined
    ) {
      const animationDuration =
        this.animation.jumpAnimation?.duration +
        this.animation.headAnimation?.duration;
      return animationDuration;
    }
    return 0;
  }
  animateJumper(
    headHeight: number,
    headDuration: number,
    jumpHeight: number,
    jumpDuration: number
  ): IAnimation {
    const headAnimation = {
      height: headHeight,
      duration: headDuration,
    };
    const jumpAnimation = {
      height: jumpHeight - 350 + Math.random() * 350,
      duration:
        jumpDuration - jumpDuration / 2 + Math.random() * (jumpDuration / 2),
    };
    return { headAnimation, jumpAnimation };
  }
  jump() {}
}
