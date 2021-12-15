import { pair } from "../util.ts";

const countMultiple = (coordinates: number[][]): number => {
  const seenOnce: Set<number> = new Set();
  const seenTwice: Set<number> = new Set();
  for (const [x1, y1, x2, y2] of coordinates) {
    const xStep = Math.sign(x2 - x1), yStep = Math.sign(y2 - y1);
    const xStop = x2 + xStep, yStop = y2 + yStep;
    for (
      let x = x1, y = y1;
      x !== xStop || y !== yStop;
      x += xStep, y += yStep
    ) {
      const coordinate = pair(x, y);
      if (!seenTwice.has(coordinate)) {
        if (seenOnce.has(coordinate)) {
          seenTwice.add(coordinate);
        } else {
          seenOnce.add(coordinate);
        }
      }
    }
  }
  return seenTwice.size;
};

export function part1(input: string): number {
  return countMultiple(
    [...input.matchAll(/(\d+),(\d+) -> (\d+),(\d+)$/gm)]
      .map((line) => [+line[1], +line[2], +line[3], +line[4]])
      .filter(([x1, y1, x2, y2]) => x1 === x2 || y1 === y2),
  );
}

export function part2(input: string): number {
  return countMultiple(
    [...input.matchAll(/(\d+),(\d+) -> (\d+),(\d+)$/gm)]
      .map((line) => [+line[1], +line[2], +line[3], +line[4]]),
  );
}
