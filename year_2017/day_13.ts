export function part1(input: string): number {
  return input.split("\n")
    .map((line) => line.split(": ").map((d) => +d))
    .map(([depth, range]) => depth % (2 * range - 2) ? 0 : depth * range)
    .reduce((a, b) => a + b, 0);
}

export function part2(input: string): number {
  const scanners = input.split("\n")
    .map((line) => line.split(": ").map((d) => +d))
    .map(([depth, range]) => [depth, 2 * range - 2])
    .sort((a, b) => a[1] - b[1]);
  let delay = 0;
  while (!scanners.every(([depth, mod]) => (depth + delay) % mod)) {
    delay += 2;
  }
  return delay;
}
