/** Maps directions to its hexagonal sign */
const COMPLEX_DIRECTIONS: Record<string, number[]> = {
  nw: [1, 0],
  n: [0, 1],
  ne: [-1, 1],
  se: [-1, 0],
  s: [0, -1],
  sw: [1, -1],
};

/** Distance from origin for a hex coordinate */
const distance = ([real, imag]: number[]): number => {
  return (Math.abs(imag) + Math.abs(real + imag) + Math.abs(real)) / 2;
};

export function part1(input: string): number {
  const destination = input
    .split(",")
    .map((direction) => COMPLEX_DIRECTIONS[direction])
    .reduce((a, b) => [a[0] + b[0], a[1] + b[1]]);
  return distance(destination);
}

export function part2(input: string): number {
  return input
    .split(",")
    .map((direction) => COMPLEX_DIRECTIONS[direction])
    .map(((a) => (b) => [a[0] += b[0], a[1] += b[1]])([0, 0]))
    .map((position) => distance(position))
    .reduce((a, b) => a > b ? a : b);
}
