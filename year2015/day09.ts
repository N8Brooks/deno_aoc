import { Iterator } from "../monkey_patch.ts";
import { permutations } from "https://deno.land/x/combinatorics/permutations.ts";
import { slidingWindows } from "https://deno.land/std/collections/mod.ts";

export function part1(text: string): number {
  return Math.min(...distances(text));
}

export function part2(text: string): number {
  return Math.max(...distances(text));
}

const pattern = /(\w+) to (\w+) = (\d+)/g;

function distances(text: string): Generator<number> {
  const dist: Map<string, Map<string, number>> = new Map();
  Iterator.from(text.matchAll(pattern)).forEach(set);
  return permutations(dist.size, dist.keys()).map(distance);

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
    for (const [aKey, bKey] of slidingWindows(path, 2)) {
      total += dist.get(aKey)?.get(bKey) ?? 0;
    }
    return total;
  }
}
