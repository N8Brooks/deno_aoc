/** Creates a graph of cave system from the given input */
const mapCaveSystem = (input: string): Map<string, string[]> => {
  const caveSystem: Map<string, string[]> = new Map();
  input.split("\n")
    .forEach((line) => {
      const [nodeA, nodeB] = line.split("-");
      if (nodeA !== "end" && nodeB !== "start") {
        const aChildren = caveSystem.get(nodeA) ?? [];
        aChildren.push(nodeB);
        caveSystem.set(nodeA, aChildren);
      }
      if (nodeA !== "start" && nodeB !== "end") {
        const bChildren = caveSystem.get(nodeB) ?? [];
        bChildren.push(nodeA);
        caveSystem.set(nodeB, bChildren);
      }
    });
  return caveSystem;
};

export function part1(input: string): number {
  const caveSystem = mapCaveSystem(input);
  const incompletePaths = [["start"]];
  let pathCount = 0;
  while (incompletePaths.length) {
    const previousNodes = incompletePaths.pop()!;
    for (const currentNode of caveSystem.get(previousNodes.at(-1)!)!) {
      if (currentNode === "end") {
        pathCount++;
      } else if (/^[A-Z]*$/.test(currentNode)) {
        incompletePaths.push([...previousNodes, currentNode]);
      } else if (!previousNodes.includes(currentNode)) {
        incompletePaths.push([...previousNodes, currentNode]);
      }
    }
  }
  return pathCount;
}

/** `Array` wrapper to help with cave paths */
class CavePath {
  constructor(
    private readonly caves: string[],
    readonly hasUniqueSmallCaves: boolean,
  ) {}

  /** Static factory for a cave path with only one cave */
  static from(cave: string) {
    return new CavePath([cave], true);
  }

  /** Returns whether the given cave is included in this cave path */
  includes(cave: string): boolean {
    return this.caves.includes(cave);
  }

  /** Creates a new cave path that inherits its uniqueness from this one */
  concat(cave: string): CavePath {
    return new CavePath([...this.caves, cave], this.hasUniqueSmallCaves);
  }

  /** Creates a new cave path that is not unique. */
  concatNonUnique(cave: string): CavePath {
    return new CavePath([...this.caves, cave], false);
  }

  /** Returns the most recently visited cave */
  end(): string {
    return this.caves.at(-1)!;
  }
}

export function part2(input: string): number {
  const caveSystem = mapCaveSystem(input);
  const incompletePaths = [CavePath.from("start")];
  let pathCount = 0;
  while (incompletePaths.length) {
    const previousNodes = incompletePaths.pop()!;
    for (const currentNode of caveSystem.get(previousNodes.end())!) {
      if (currentNode === "end") {
        pathCount++;
      } else if (/^[A-Z]*$/.test(currentNode)) {
        incompletePaths.push(previousNodes.concat(currentNode));
      } else if (!previousNodes.includes(currentNode)) {
        incompletePaths.push(previousNodes.concat(currentNode));
      } else if (previousNodes.hasUniqueSmallCaves) {
        incompletePaths.push(previousNodes.concatNonUnique(currentNode));
      }
    }
  }
  return pathCount;
}
