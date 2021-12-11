const simulateLanternFish = (input: string, days: number): number => {
  const timerCounts = Array(9).fill(0);
  for (const timer of input.split(",")) {
    timerCounts[+timer]++;
  }
  for (let day = 0; day < days; day++) {
    const x = timerCounts.shift();
    timerCounts[6] += x;
    timerCounts[8] = x;
  }
  return timerCounts.reduce((a, b) => a + b);
};

export function part1(input: string): number {
  return simulateLanternFish(input, 80);
}

export function part2(input: string): number {
  return simulateLanternFish(input, 256);
}
