import SerialPort from './SerialPort';

const DEFAULT_SERIAL_PORT = '/dev/tty.ATLAS7-ESP32_SPP_SERVER';

export default p => {
  let serial;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

    serial = new SerialPort();

    serial.open(DEFAULT_SERIAL_PORT, () => {
      console.log('Serial port is open');
    });
  };

  p.draw = () => {
    p.background(100);
    p.fill('#fff');
    if (serial.available() > 0) {
      var data = serial.read();
      p.ellipse(50, 50, data, data);
    }
  };

  return p;
};
