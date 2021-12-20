import { permutations } from "../deps.ts";

const distances = (input: string): number[] => {
  const dist: Map<string, Map<string, number>> = new Map();

  for (const [, aKey, bKey, d] of input.matchAll(/(\w+) to (\w+) = (\d+)/g)) {
    const aMap = dist.get(aKey);
    const bMap = dist.get(bKey);

    if (aMap === undefined) {
      dist.set(aKey, new Map().set(bKey, +d));
    } else {
      aMap.set(bKey, +d);
    }

    if (bMap === undefined) {
      dist.set(bKey, new Map().set(aKey, +d));
    } else {
      bMap.set(aKey, +d);
    }
  }

  return [...permutations(dist.keys())].map((path) => {
    let total = 0;
    let aKey = path[0];
    for (let i = 1; i < path.length; i++) {
      const bKey = path[i];
      total += dist.get(aKey)?.get(bKey) ?? 0;
      aKey = bKey;
    }
    return total;
  });
};

export function part1(input: string): number {
  return Math.min(...distances(input));
}

export function part2(input: string): number {
  return Math.max(...distances(input));
}
