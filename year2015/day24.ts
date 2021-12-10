import { powerSet } from "../deps.ts";

export function part1(input: string): number {
  return partition(input, 3);
}

export function part2(input: string): number {
  return partition(input, 4);
}

function partition(input: string, k: number) {
  const population = input.split(/\W/).map((value) => +value);
  const target = sum(population) / k;
  const sample = powerSet(population).find((sample) => target === sum(sample))!;
  return sample.reduce((a, b) => a * b, 1);
}

function sum(iterable: Iterable<number>): number {
  let total = 0;
  for (const value of iterable) {
    total += value;
  }
  return total;
}
