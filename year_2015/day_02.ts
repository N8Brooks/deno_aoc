export function part1(input: string): number {
  return processInput(input).reduce((sum, d) => sum + paper(d), 0);
}

export function part2(input: string): number {
  return processInput(input).reduce((sum, d) => sum + ribbon(d), 0);
}

function processInput(input: string): number[][] {
  return input
    .split("\n")
    .map(processLine);
}

function processLine(line: string): number[] {
  return line.split("x").map(Number).sort((a, b) => a - b);
}

function paper([a, b, c]: number[]): number {
  return 3 * a * b + 2 * (a + b) * c;
}

function ribbon([a, b, c]: number[]): number {
  return 2 * (a + b) + a * b * c;
}
