export function part1(data: string): number {
  return data
    .trimEnd()
    .split("\n")
    .map((line) => line.length - eval(line).length)
    .reduce((a, b) => a + b, 0);
}

export function part2(data: string): number {
  return data
    .trimEnd()
    .split("\n")
    .map((line) => JSON.stringify(line).length - line.length)
    .reduce((a, b) => a + b, 0);
}
