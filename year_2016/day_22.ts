import { combinations } from "../deps.ts";

export function part1(input: string): number {
  let viablePairsCount = 0;
  const nodes = input
    .split("\n")
    .slice(2)
    .map((line) => {
      const [, , , used, avail] = line.matchAll(/\d+/g);
      return { used: +used, avail: +avail };
    });
  for (const [a, b] of combinations(nodes, 2)) {
    if (0 < a.used && a.used <= b.avail) {
      viablePairsCount++;
    }
    if (0 < b.used && b.used <= a.avail) {
      viablePairsCount++;
    }
  }
  return viablePairsCount;
}

export function part2(input: string): number {
  // Starting empty position
  let x0 = 0, y0 = 0;
  // Max x index representing "G"
  let goalX = -1;
  // X positions that cannot be swapped due to their size
  const unBlockedXs: Set<number> = new Set();
  input
    .split("\n")
    .slice(2)
    .forEach((line) => {
      const [x1, y1, , used] = [...line.matchAll(/\d+/g)].map((d) => +d);
      if (x1 > goalX) {
        unBlockedXs.add(x1);
        goalX = x1;
      }
      if (used === 0) {
        x0 = x1;
        y0 = y1;
      } else if (used >= 100) {
        unBlockedXs.delete(x1);
      }
    });

  // Move to a free x position
  let minimumSteps = 0;
  const [x1] = [...unBlockedXs].sort((xA, xB) =>
    Math.abs(xA - x0) - Math.abs(xB - x0)
  );
  minimumSteps += Math.abs(x1 - x0);
  // Move to y = 0
  minimumSteps += y0;
  y0 = 0;
  // Replace "G" with "_"
  minimumSteps += goalX - x1;
  // Shuffle back to starting position
  minimumSteps += 5 * (goalX - 1);

  return minimumSteps;
}
