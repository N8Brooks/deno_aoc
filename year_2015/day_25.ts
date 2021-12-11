const CODE = 20151125n;

const MULT = 252533n;

const MOD = 33554393n;

export function part1(input: string): bigint {
  const [row, col] = [...input.matchAll(/\d+/g)].map((match) => BigInt(+match));
  const n = (row + col - 1n) * (row + col - 2n) / 2n + col - 1n;
  return CODE * MULT ** n % MOD;
}
