import { Iterator, permutations } from "../deps.ts";

export function part1(input: string): number {
  return Math.min(...distances(input));
}

export function part2(input: string): number {
  return Math.max(...distances(input));
}

const EDGE_PATTERN = /(\w+) to (\w+) = (\d+)/g;

function distances(input: string): Generator<number> {
  const dist: Map<string, Map<string, number>> = new Map();
  Iterator.from(input.matchAll(EDGE_PATTERN)).forEach(set);
  return permutations(dist.keys()).map(distance);

  function set([, aKey, bKey, dString]: string[]): void {
    const aMap = dist.get(aKey);
    const bMap = dist.get(bKey);
    const dNumber = +dString;

    if (aMap === undefined) {
      dist.set(aKey, new Map().set(bKey, dNumber));
    } else {
      aMap.set(bKey, dNumber);
    }

    if (bMap === undefined) {
      dist.set(bKey, new Map().set(aKey, dNumber));
    } else {
      bMap.set(aKey, dNumber);
    }
  }

  function distance(path: string[]): number {
    let total = 0;
    let aKey = path[0];
    for (let i = 1; i < path.length; i++) {
      const bKey = path[i];
      total += dist.get(aKey)?.get(bKey) ?? 0;
      aKey = bKey;
    }
    return total;
  }
}
