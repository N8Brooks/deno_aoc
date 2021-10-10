export function part1(data: string): number {
  const digits = data.trimEnd();
  let previousDigit = digits.at(-1);
  let sum = 0;
  for (const currentDigit of digits) {
    if (previousDigit === currentDigit) {
      sum = +currentDigit + sum;
    } else {
      previousDigit = currentDigit;
    }
  }
  return sum;
}

export function part2(data: string): number {
  const digits = data.trimEnd();
  const halfway = Math.floor(digits.length / 2);
  let sum = 0;
  for (let i = 0; i < halfway; i++) {
    if (digits[i] === digits[i + halfway]) {
      sum = 2 * +digits[i] + sum;
    }
  }
  return sum;
}
