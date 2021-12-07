const nthSpokenNumber = (input: string, n: number): number => {
  const lastTimeSpoken = new Array(n);
  const startingNumbers = input.split(",").map(Number);
  let previousNumber = NaN;
  startingNumbers.forEach((currentNumber, t) => {
    lastTimeSpoken[currentNumber] = t + 1;
    previousNumber = currentNumber;
  });
  for (let time = startingNumbers.length; time < n; time++) {
    const currentNumber = lastTimeSpoken[previousNumber];
    lastTimeSpoken[previousNumber] = time;
    previousNumber = currentNumber === undefined ? 0 : time - currentNumber;
  }
  return previousNumber;
};

export function part1(input: string): number {
  return nthSpokenNumber(input, 2020);
}

export function part2(input: string): number {
  return nthSpokenNumber(input, 30_000_000);
}
