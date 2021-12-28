export function part1(input: string): number {
  const n = +input;
  return 2 * (n - 2 ** Math.floor(Math.log2(n))) + 1;
}

const highestPowerOf3 = (n: number): number => {
  let i = 0;
  while (3 ** i <= n) {
    i++;
  }
  return 3 ** (i - 1);
};

export function part2(input: string): number {
  const n = +input;
  const x = highestPowerOf3(n);
  if (x === n) {
    return x;
  } else if (n < 2 * x) {
    return n % x;
  } else {
    return x + 2 * (n % x);
  }
}
