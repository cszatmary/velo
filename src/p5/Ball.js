import Vector from './Vector';

const BALL_SIZE = 30;

export default class Ball {
  constructor() {
    this.accelerations = [];
  }

  addAcceleration(acc) {
    if (this.accelerations.length === 0) {
    } else if (this.accelerations.length > 99) {
      this.accelerations.shift();
    }
    this.accelerations.push(acc);
  }

  setImg(img) {
    this.img = img;
  }

  draw(p) {
    p.noStroke();
    // p.fill('#4a57a6');
    this.accelerations.forEach((acc, i) => {
      const magnitude = Vector.magnitude(acc);
      const direction = Vector.direction(acc);

      p.fill(74 + (magnitude * direction.X * 2) , 87 + (magnitude * direction.Y * 2), 166 + (magnitude * direction.Z * 2));
      if (i === this.accelerations.length - 1) {
        p.image(this.img, acc.X - BALL_SIZE / 2, acc.Z - BALL_SIZE / 2, BALL_SIZE, BALL_SIZE)
      } else {
        p.ellipse(acc.X, acc.Z, BALL_SIZE, BALL_SIZE);
      }
    });
  }
}
