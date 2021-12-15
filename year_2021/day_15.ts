import { BinaryHeap } from "../deps.ts";
import { pair, unPair } from "../util.ts";

const lowestTotalRisk = (riskLevelMap: number[][]): number => {
  const distances = riskLevelMap.map((row) => row.map(() => Infinity));
  distances[0][0] = 0;
  const visited: Set<number> = new Set();
  const unVisited = BinaryHeap.from(
    [pair(0, 0)],
    {
      compare: (a: number, b: number) => {
        const [y1, x1] = unPair(a);
        const [y2, x2] = unPair(b);
        return distances[y1][x1] - distances[y2][x2];
      },
    },
  );
  let y: number, x: number;
  do {
    const key = unVisited.pop()!;
    [y, x] = unPair(key);
    if (visited.has(key)) {
      continue;
    }
    visited.add(key);
    const risk = distances[y][x];
    const neighbors: [number, number][] = [];
    if (x > 0) {
      neighbors.push([y, x - 1]);
    }
    if (y > 0) {
      neighbors.push([y - 1, x]);
    }
    if (x + 1 < riskLevelMap[0].length) {
      neighbors.push([y, x + 1]);
    }
    if (y + 1 < riskLevelMap.length) {
      neighbors.push([y + 1, x]);
    }
    for (const [y, x] of neighbors) {
      const key = pair(y, x);
      if (visited.has(key)) {
        continue;
      }
      distances[y][x] = Math.min(distances[y][x], risk + riskLevelMap[y][x]);
      unVisited.push(key);
    }
  } while (y + 1 !== riskLevelMap.length || x + 1 !== riskLevelMap[0].length);
  return distances[y][x];
};

export function part1(input: string): number {
  const riskLevelMap = input.split("\n").map((line) =>
    line.split("").map((d) => +d)
  );
  return lowestTotalRisk(riskLevelMap);
}

export function part2(input: string): number {
  const readOnlyMap = input.split("\n").map((line) =>
    line.split("").map((d) => +d)
  );
  const length = readOnlyMap.length;
  const riskLevelMap = Array.from(
    { length: 5 * length },
    (_, y) =>
      Array.from({ length: 5 * length }, (_, x) => {
        const risk = readOnlyMap[y % length][x % length] +
          Math.floor(y / length) +
          Math.floor(x / length);
        return risk > 9 ? risk - 9 : risk;
      }),
  );
  return lowestTotalRisk(riskLevelMap);
}
