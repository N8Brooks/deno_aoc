import { pow } from "../util.ts";

const CODE = 20151125;

const EXP = 252533;

const MOD = 33554393;

export function part1(input: string): number {
  const [row, col] = [...input.matchAll(/\d+/g)].map((d) => +d);
  const n = (row + col - 1) * (row + col - 2) / 2 + col - 1;
  return CODE * pow(EXP, n, MOD) % MOD;
}
