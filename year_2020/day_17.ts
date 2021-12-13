import { permutationsWithReplacement } from "../deps.ts";

const simulate = (input: string, dimensions: number): number => {
  const coordinatePadding = new Array(dimensions - 2).fill(0);
  const neighbors = [...permutationsWithReplacement([-1, 1, 0], dimensions)];
  neighbors.length -= 1;
  let previousCubes: Set<string> = new Set();
  input.split("\n").forEach((line, y) => {
    line.split("").forEach((char, x) => {
      if (char === "#") {
        const key = [x, y, ...coordinatePadding].join();
        previousCubes.add(key);
      }
    });
  });
  for (let cycle = 0; cycle < 6; cycle++) {
    const counts: Map<string, number> = new Map();
    for (const sourceKey of previousCubes) {
      const sourceCube = sourceKey.split(",").map((d) => +d);
      for (const neighbor of neighbors) {
        const destCube = sourceCube.map((x, i) => x + neighbor[i]);
        const destKey = destCube.join();
        const count = counts.get(destKey) ?? 0;
        counts.set(destKey, count + 1);
      }
    }
    const currentCubes: Set<string> = new Set();
    for (const [key, count] of counts) {
      if (count === 3 || count === 2 && previousCubes.has(key)) {
        currentCubes.add(key);
      }
    }
    previousCubes = currentCubes;
  }
  return previousCubes.size;
};

export function part1(input: string): number {
  return simulate(input, 3);
}

export function part2(input: string): number {
  return simulate(input, 4);
}
