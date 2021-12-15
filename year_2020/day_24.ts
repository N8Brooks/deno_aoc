import { pair, unPair } from "../util.ts";

const HEX_DIRECTIONS: Record<string, [number, number]> = {
  ne: [0, 1],
  e: [1, 0],
  se: [1, -1],
  sw: [0, -1],
  w: [-1, 0],
  nw: [-1, 1],
};

const DIRECTIONS = Object.values(HEX_DIRECTIONS);

const oddCoordinateCounts = (input: string): Map<number, number> => {
  const coordinateCounts: Map<number, number> = new Map();
  for (const line of input.split("\n")) {
    let realValue = 0, imagValue = 0;
    for (const [direction] of line.matchAll(/[ns]?[ew]/g)) {
      const [realDelta, imagDelta] = HEX_DIRECTIONS[direction];
      realValue += realDelta;
      imagValue += imagDelta;
    }
    const coordinate = pair(realValue, imagValue);
    const count = coordinateCounts.get(coordinate) ?? 0;
    coordinateCounts.set(coordinate, count + 1);
  }
  for (const [coordinate, count] of coordinateCounts) {
    if (count % 2 === 0) {
      coordinateCounts.delete(coordinate);
    }
  }
  return coordinateCounts;
};

export function part1(input: string): number {
  return oddCoordinateCounts(input).size;
}

export function part2(input: string): number {
  let previousCoordinateCounts = oddCoordinateCounts(input);
  for (let day = 0; day < 100; day++) {
    const currentCoordinateCounts = new Map();
    for (const coordinate of previousCoordinateCounts.keys()) {
      const [realValue, imagValue] = unPair(coordinate);
      for (const [realDelta, imagDelta] of DIRECTIONS) {
        const coordinate = pair(realValue + realDelta, imagValue + imagDelta);
        const count = currentCoordinateCounts.get(coordinate) ?? 0;
        currentCoordinateCounts.set(coordinate, count + 1);
      }
    }
    for (const [coordinate, count] of currentCoordinateCounts) {
      if (
        count !== 2 &&
        !(count === 1 && previousCoordinateCounts.has(coordinate))
      ) {
        currentCoordinateCounts.delete(coordinate);
      }
    }
    previousCoordinateCounts = currentCoordinateCounts;
  }
  return previousCoordinateCounts.size;
}
