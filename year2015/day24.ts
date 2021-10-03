import "https://deno.land/x/generator_helpers/monkey_patch.ts";
import { powerSet } from "https://deno.land/x/combinatorics/power_set.ts";

export function part1(text: string): number {
  return partition(text, 3);
}

export function part2(text: string): number {
  return partition(text, 4);
}

function partition(text: string, k: number) {
  const population = text.trimEnd().split(/\W/).map((value) => +value);
  const target = sum(population) / k;
  const sample = powerSet(population).find((sample) => target === sum(sample));
  if (sample === undefined) {
    throw Error("no combination was found with targeted value");
  }
  return sample.reduce((a, b) => a * b, 1);
}

function sum(iterable: Iterable<number>): number {
  let total = 0;
  for (const value of iterable) {
    total += value;
  }
  return total;
}
