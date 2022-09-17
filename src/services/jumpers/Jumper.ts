interface Animation {
  showHeadAnimation: { height: number; duration: number } | null;
}
export class Jumper {
  animation: Animation = this.animateJumper(50, 7);
  jumpDuration: number = 3 + Math.random() * 3;
  jumperImage;
  sound: HTMLAudioElement;

  public onShotJumper: () => void = () => {};

  constructor(
    image: string,
    onShotJumper: () => void,
    sound: HTMLAudioElement
  ) {
    this.onShotJumper = onShotJumper;
    this.jumperImage = image;
    this.sound = sound;
  }

  animateJumper(showHead: number, showHeadDuration: number): Animation {
    const showHeadAnimation = { height: -showHead, duration: showHeadDuration };
    return { showHeadAnimation };
  }
  jump() {}
}
