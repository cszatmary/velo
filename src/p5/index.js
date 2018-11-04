import SerialPort from './SerialPort';
import Ball from './Ball';
import ballImg from "../assets/velo_ball.png";

const DEFAULT_SERIAL_PORT = '/dev/tty.ATLAS7-ESP32_SPP_SERVER';

export default p => {
  let serial;
  const ball = new Ball();

  let props = {};

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.loadImage(ballImg, img => ball.setImg(img));
    serial = new SerialPort();

    serial.open(DEFAULT_SERIAL_PORT, () => {
      console.log('Serial port is open');
    });

    // serial.list(list => list.forEach(el => console.log(el)));
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    centerOrigin();
    p.background('#fff');
    if (props.isGridVisible) {
      drawGrid();
    }
    p.fill('000000');
    trackAcceleration(readData());
    ball.draw(p);
  };

  p.pushProps = (newProps) => {
    props = newProps;
  };

  function drawGrid() {
    p.stroke(200);
    p.fill(100);
    for (let x = -p.width; x < p.width; x += 40) {
      p.line(x, -p.height, x, p.height);
      p.text(x, x + 1, 12);
    }
    for (let y = -p.height; y < p.height; y += 40) {
      p.line(-p.width, y, p.width, y);
      p.text(y, 1, y + 12);
    }
  }

  function centerOrigin() {
    p.translate(p.width / 2, p.height / 2);
    p.scale(3.5);
  }

  function readData() {
    return serial.available() > 0 ? serial.readLine() : undefined;
  }

  function trackAcceleration(data) {
    if (!data) {
      return;
    }

    ball.addAcceleration(JSON.parse(data));
  }

  return p;
};
