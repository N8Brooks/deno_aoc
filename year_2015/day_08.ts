export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) =>
      line.length - line.replace(/\\(\\|"|x[\da-f]{2})/g, " ").length + 2
    )
    .reduce((a, b) => a + b, 0);
}

export function part2(input: string): number {
  return input
    .split("\n")
    .map((line) => JSON.stringify(line).length - line.length)
    .reduce((a, b) => a + b, 0);
}
