/** The node index for the cave `"start"` */
const CAVE_START = 0;

/** The node index for the cave `"end"` */
const CAVE_END = 1;

/** Creates a graph of cave system with `"end"` as `-1` and `"start"` as 0 */
const mapCaveSystem = (input: string): [number[][], boolean[]] => {
  const caveNumbers: Record<string, number> = {
    end: CAVE_END,
    start: CAVE_START,
  };
  let nextCaveNumber = CAVE_END + 1;
  const isLargeCave = [false];
  const caveSystem: number[][] = [[]];
  for (const line of input.split("\n")) {
    const [caveA, caveB] = line.split("-");
    const nodeA = getCaveNumber(caveA);
    const nodeB = getCaveNumber(caveB);
    if (nodeA !== CAVE_END && nodeB !== CAVE_START) {
      caveSystem[nodeA].push(nodeB);
    }
    if (nodeA !== CAVE_START && nodeB !== CAVE_END) {
      caveSystem[nodeB].push(nodeA);
    }
  }
  return [caveSystem, isLargeCave];

  function getCaveNumber(cave: string): number {
    let caveNumber = caveNumbers[cave];
    if (caveNumber === undefined) {
      caveNumber = nextCaveNumber++;
      caveNumbers[cave] = caveNumber;
      caveSystem[caveNumber] = [];
      isLargeCave[caveNumber] = /^[A-Z]*$/.test(cave);
    }
    return caveNumber;
  }
};

export function part1(input: string): number {
  const [caveSystem, isLargeCave] = mapCaveSystem(input);
  const path: [number, number][] = [[0, 0]];
  let pathCount = 0;
  while (path.length) {
    const [cave, index] = path.pop()!;
    if (cave === CAVE_END) {
      pathCount++;
      continue;
    }
    const children = caveSystem[cave];
    const child = children[index];
    if (child === undefined) {
      continue;
    } else if (isLargeCave[child] || !path.some(([cave]) => cave === child)) {
      path.push([cave, index + 1], [child, 0]);
    } else {
      path.push([cave, index + 1]);
    }
  }
  return pathCount;
}

export function part2(input: string): number {
  const [caveSystem, isLargeCave] = mapCaveSystem(input);
  const path: [number, number][] = [[0, 0]];
  const caveCounts = Array(caveSystem.length).fill(0);
  let pathCount = 0;
  let isUnique = true;
  while (path.length) {
    const [cave, index] = path.pop()!;
    if (cave === CAVE_END) {
      caveCounts[cave]--;
      pathCount++;
      continue;
    }
    const children = caveSystem[cave];
    const child = children[index];
    if (index === children.length) {
      const count = caveCounts[cave]--;
      if (count === 2 && !isLargeCave[child]) {
        isUnique = true;
      }
    } else if (isLargeCave[child]) {
      path.push([cave, index + 1], [child, 0]);
    } else if (caveCounts[child] === 0) {
      caveCounts[child] = 1;
      path.push([cave, index + 1], [child, 0]);
    } else if (isUnique && caveCounts[child] === 1) {
      caveCounts[child] = 2;
      isUnique = false;
      path.push([cave, index + 1], [child, 0]);
    } else {
      path.push([cave, index + 1]);
    }
  }
  return pathCount;
}
