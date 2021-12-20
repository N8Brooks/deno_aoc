const DIRECTIONS: Record<string, [number, number]> = {
  R: [1, 0],
  D: [0, -1],
  L: [-1, 0],
  U: [0, 1],
};

export function part1(input: string): number {
  const [firstWire, secondWire] = input.split("\n");
  const firstWirePath = new Set();
  let x = 0, y = 0;
  for (const line of firstWire.split(",")) {
    const distance = +line.substr(1);
    const [dx, dy] = DIRECTIONS[line[0]];
    for (let i = 0; i < +distance; i++) {
      x += dx;
      y += dy;
      firstWirePath.add(`${x},${y}`);
    }
  }
  let closestIntersection = Infinity;
  x = 0, y = 0;
  for (const line of secondWire.split(",")) {
    const distance = +line.substr(1);
    const [dx, dy] = DIRECTIONS[line[0]];
    for (let i = 0; i < distance; i++) {
      x += dx;
      y += dy;
      if (firstWirePath.has(`${x},${y}`)) {
        closestIntersection = Math.min(
          closestIntersection,
          Math.abs(x) + Math.abs(y),
        );
      }
    }
  }
  return closestIntersection;
}

export function part2(input: string): number {
  const [firstWire, secondWire] = input.split("\n");
  const firstWireSteps = new Map();
  let x = 0, y = 0, steps = 1;
  for (const line of firstWire.split(",")) {
    const distance = +line.substr(1) + steps;
    const [dx, dy] = DIRECTIONS[line[0]];
    for (; steps < distance; steps++) {
      x += dx;
      y += dy;
      firstWireSteps.set(`${x},${y}`, steps);
    }
  }
  let fewestSteps = Infinity;
  x = 0, y = 0, steps = 1;
  for (const line of secondWire.split(",")) {
    const distance = +line.substr(1) + steps;
    const [dx, dy] = DIRECTIONS[line[0]];
    for (; steps < distance; steps++) {
      x += dx;
      y += dy;
      if (firstWireSteps.has(`${x},${y}`)) {
        fewestSteps = Math.min(
          fewestSteps,
          steps + firstWireSteps.get(`${x},${y}`),
        );
      }
    }
  }
  return fewestSteps;
}
