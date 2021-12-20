import { powerSet } from "../deps.ts";

const partition = (input: string, k: number): number => {
  const population = input.split(/\W/).map((value) => +value);
  const target = population.reduce((a, b) => a + b) / k;
  for (const sample of powerSet(population)) {
    const sum = sample.reduce((a, b) => a + b, 0);
    if (target === sum) {
      return sample.reduce((a, b) => a * b, 1);
    }
  }
  return NaN;
};

export function part1(input: string): number {
  return partition(input, 3);
}

export function part2(input: string): number {
  return partition(input, 4);
}
