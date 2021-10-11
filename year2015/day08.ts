export function part1(data: string): number {
  return data
    .split("\n")
    .map((line) =>
      line.length - line.replace(/\\(\\|"|x[\da-f]{2})/g, " ").length + 2
    )
    .reduce((a, b) => a + b, 0);
}

export function part2(data: string): number {
  return data
    .split("\n")
    .map((line) => JSON.stringify(line).length - line.length)
    .reduce((a, b) => a + b, 0);
}
