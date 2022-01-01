const GENERATOR_A_FACTOR = 16_807;

const GENERATOR_B_FACTOR = 48_271;

const DIVISOR = 2_147_483_647;

const RIGHTMOST_16_BITS = 0b1111_1111_1111_1111;

export function part1(input: string): number {
  let [a, b] = [...input.matchAll(/\d+/g)].map((d) => +d);
  let judgeCount = 0;
  for (let i = 0; i < 40_000_000; i++) {
    a = (GENERATOR_A_FACTOR * a) % DIVISOR;
    b = (GENERATOR_B_FACTOR * b) % DIVISOR;
    if ((a & RIGHTMOST_16_BITS) === (b & RIGHTMOST_16_BITS)) {
      judgeCount++;
    }
  }
  return judgeCount;
}

export function part2(input: string): number {
  let [a, b] = [...input.matchAll(/\d+/g)].map((d) => +d);
  let judgeCount = 0;
  for (let i = 0; i < 5_000_000; i++) {
    do {
      a = (GENERATOR_A_FACTOR * a) % DIVISOR;
    } while (a & 3);
    do {
      b = (GENERATOR_B_FACTOR * b) % DIVISOR;
    } while (b & 7);
    if ((a & RIGHTMOST_16_BITS) === (b & RIGHTMOST_16_BITS)) {
      judgeCount++;
    }
  }
  return judgeCount;
}
