export const calcRotateAngle = (t: number, delta = 0.25, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(3 * Math.PI * t * f) / delta);
