import { zip } from "../deps.ts";

export function part1(input: string): number {
  const points = input
    .split("\n")
    .map((line) => line.split(", "))
    .map(([x, y]) => [+x, +y]);
  const counts = Array(points.length).fill(0);
  const [xs, ys] = zip(...points);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  for (let x0 = 0; x0 <= maxX; x0++) {
    for (let y0 = 0; y0 <= maxY; y0++) {
      let minDistance = Infinity;
      let minDistanceIndex = NaN;
      let minDistanceCount = NaN;
      for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        const distance = Math.abs(x1 - x0) + Math.abs(y1 - y0);
        if (distance === minDistance) {
          minDistanceCount++;
        } else if (distance < minDistance) {
          minDistance = distance;
          minDistanceIndex = i;
          minDistanceCount = 1;
        }
      }
      if (minDistanceCount !== 1) {
        continue;
      }
      if (x0 === 0 || x0 === maxX || y0 === 0 || y0 === maxY) {
        counts[minDistanceIndex] = -Infinity;
      } else {
        counts[minDistanceIndex]++;
      }
    }
  }
  return Math.max(...counts);
}

export function part2(input: string, distanceUpperBound: number): number {
  const points = input
    .split("\n")
    .map((line) => line.split(", "))
    .map(([x, y]) => [+x, +y]);
  const [xs, ys] = zip(...points);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  let count = 0;
  for (let x0 = 0; x0 <= maxX; x0++) {
    for (let y0 = 0; y0 <= maxY; y0++) {
      const totalDistance = points.reduce((sum, [x1, y1]) => {
        return sum + Math.abs(x1 - x0) + Math.abs(y1 - y0);
      }, 0);
      if (totalDistance < distanceUpperBound) {
        count++;
      }
    }
  }
  return count;
}
