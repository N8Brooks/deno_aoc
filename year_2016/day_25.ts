export function part1(input: string): number {
  const [, c, b] = input.match(/cpy (\d+) c\ncpy (\d+) b/)!;
  const subtrahend = +c * +b;
  const count = Math.ceil(Math.log2(subtrahend) / 2);
  const minuend = parseInt("10".repeat(count), 2);
  return minuend - subtrahend;
}
