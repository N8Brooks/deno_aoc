const directions: Record<string, [number, number]> = {
  "^": [0, 1],
  ">": [1, 0],
  "v": [0, -1],
  "<": [-1, 0],
};

export function part1(input: string): number {
  let xSanta = 0, ySanta = 0;
  const locations = new Set().add("0,0");
  input.split("").forEach((direction) => {
    const [xDelta, yDelta] = directions[direction];
    locations.add(`${xSanta += xDelta},${ySanta += yDelta}`);
  });
  return locations.size;
}

export function part2(input: string): number {
  let xSanta = 0, ySanta = 0;
  let xRobot = 0, yRobot = 0;
  const locations = new Set().add("0,0");
  input.split("").forEach((direction, i) => {
    const [xDelta, yDelta] = directions[direction];
    if (i % 2) {
      locations.add(`${xRobot += xDelta},${yRobot += yDelta}`);
    } else {
      locations.add(`${xSanta += xDelta},${ySanta += yDelta}`);
    }
  });
  return locations.size;
}
