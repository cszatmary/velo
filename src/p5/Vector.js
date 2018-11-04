export default class Vector {
  static magnitude = vector => Math.sqrt(vector.X ** 2, vector.Y ** 2, vector.Z ** 2);
  static direction = vector => ({ X: Math.sign(vector.X), Y: Math.sign(vector.Y), Z: Math.sign(vector.Z) });
}