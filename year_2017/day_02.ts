export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) => {
      const numbers = line.split(/\s+/).map(Number);
      return Math.max(...numbers) - Math.min(...numbers);
    })
    .reduce((a, b) => a + b, 0);
}

export function part2(input: string): number {
  return input
    .split("\n")
    .map((line) => {
      const numbers = line.split(/\s+/).map(Number).sort((a, b) => a - b);
      for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length - 1; j > i; j--) {
          if (numbers[j] % numbers[i] === 0) {
            return numbers[j] / numbers[i];
          }
        }
      }
      return NaN;
    })
    .reduce((a, b) => a + b, 0);
}
