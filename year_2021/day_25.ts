/** Szudzik's pairing function */
const pair = (x: number, y: number) => {
  return y > x ? y * y + x : x * x + x + y;
};

/** Inverse Szudzik's pairing function */
const unPair = (z: number): [number, number] => {
  const intSquareRoot = ~~(z ** 0.5);
  const perfectSquare = intSquareRoot * intSquareRoot;
  return intSquareRoot > z - perfectSquare
    ? [z - perfectSquare, intSquareRoot]
    : [intSquareRoot, z - perfectSquare - intSquareRoot];
};

export function part1(input: string): number {
  // [eastCucumberHerds, southCucumberHerds]
  const cucumberHerds: Set<number>[] = [new Set(), new Set()];

  const seafloor = input.split("\n");
  const length = seafloor.length;
  const width = seafloor[0].length;

  seafloor.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      if (cell !== ".") {
        const direction = +(cell === "v");
        cucumberHerds[direction].add(pair(x, y));
      }
    });
  });

  let change: boolean;
  let steps = 0;
  do {
    change = false;
    cucumberHerds.forEach((previousCucumberHerd, direction) => {
      const currentCucumberHerd: Set<number> = new Set();
      const [dx, dy] = direction ? [0, 1] : [1, 0];
      for (const key0 of previousCucumberHerd) {
        const [x, y] = unPair(key0);
        const key1 = pair((x + dx) % width, (y + dy) % length);
        if (cucumberHerds.some((cucumberHerd) => cucumberHerd.has(key1))) {
          currentCucumberHerd.add(key0);
        } else {
          currentCucumberHerd.add(key1);
          change = true;
        }
      }
      cucumberHerds[direction] = currentCucumberHerd;
    });
    steps++;
  } while (change);

  return steps;
}
