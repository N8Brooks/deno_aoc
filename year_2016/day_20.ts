export function part1(input: string): number {
  const blockList = input.split("\n")
    .map((line) => line.split("-").map((d) => +d));
  return blockList
    .map(([a, b]) => [a - 1, b + 1])
    .flat()
    .filter((x) => x >= 0 && blockList.every(([a, b]) => x < a || b < x))
    .sort((a, b) => a - b)[0];
}

export function part2(input: string, hi = 4294967295): number {
  const blockList = input.split("\n")
    .map((line) => line.split("-").map((d) => +d))
    .sort(([a], [b]) => a - b);
  blockList.push([hi + 1, 0]);
  let j0 = 0;
  let allowedCount = 0;
  for (const [i1, j1] of blockList) {
    if (j0 < i1) {
      allowedCount += i1 - j0;
    }
    j0 = Math.max(j0, j1 + 1);
  }
  return allowedCount;
}
