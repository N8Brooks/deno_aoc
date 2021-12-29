const factorial = (n: number): number => {
  let prod = 1;
  for (let i = 2; i <= n; i++) {
    prod *= i;
  }
  return prod;
};

const execute = (input: string, a: number): number => {
  const [, c, d] = input.match(/cpy (\d+) c\njnz (\d+) d/)!;
  return factorial(a) + +c * +d;
};

export function part1(input: string): number {
  return execute(input, 7);
}

export function part2(input: string): number {
  return execute(input, 12);
}
