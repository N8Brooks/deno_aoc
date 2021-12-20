/** Risk map node */
class Node {
  /** Whether this node is included in the open set */
  open = false;

  /** Best guess for risk of path from start to finish including this */
  fScore = Infinity;

  /** Cheapest path from start to this node that is currently known */
  gScore = Infinity;

  constructor(
    public y: number,
    public x: number,
    public risk: number,
    private maxIndex: number,
  ) {}

  /** Iterate this node's neighboring indices */
  *[Symbol.iterator](): Generator<[number, number]> {
    if (this.y > 0) {
      yield [this.y - 1, this.x];
    }
    if (this.x > 0) {
      yield [this.y, this.x - 1];
    }
    if (this.y < this.maxIndex) {
      yield [this.y + 1, this.x];
    }
    if (this.x < this.maxIndex) {
      yield [this.y, this.x + 1];
    }
  }

  /** Heuristic of cost to finish from this node. Lower bound of possible risk.  */
  heuristic(): number {
    return this.maxIndex - this.x + this.maxIndex - this.y;
  }
}

const lowestTotalRisk = (nodes: Node[][]): number => {
  const length = nodes.length;
  const maxIndex = length - 1;

  // Begin with the first node
  const startingNode = nodes[0][0];
  startingNode.gScore = 0;
  startingNode.fScore = startingNode.heuristic();
  startingNode.open = true;

  // Discovered nodes to be investigated for a possibly lower risk path
  const maxPathLength = 2 * 9 * maxIndex;
  const openSet: Node[][] = Array.from({ length: maxPathLength }, () => []);
  openSet[0].push(startingNode);
  let pointer = 0;

  while (pointer < maxPathLength) {
    // Take next node
    const currentNode = openSet[pointer].pop()!;
    while (pointer < maxPathLength && !openSet[pointer].length) {
      pointer++;
    }
    currentNode.open = false;
    if (currentNode.y === maxIndex && currentNode.x === maxIndex) {
      return currentNode.gScore;
    }

    // Iterate neighboring nodes
    for (const [y, x] of currentNode) {
      const neighboringNode = nodes[y][x];
      const tentativeGScore = currentNode.gScore + neighboringNode.risk;

      // Update g score if lower
      if (tentativeGScore < neighboringNode.gScore) {
        neighboringNode.gScore = tentativeGScore;
        neighboringNode.fScore = tentativeGScore + neighboringNode.heuristic();

        // Add to neighboring nodes for investigation
        if (!neighboringNode.open) {
          openSet[neighboringNode.fScore].push(neighboringNode);
          pointer = Math.min(pointer, neighboringNode.fScore);
          neighboringNode.open = true;
        }
      }
    }
  }

  throw Error("Did not find end of cave");
};

export function part1(input: string): number {
  const riskLevelMap = input.split("\n").map((line, y) =>
    line.split("").map((risk, x, { length }) =>
      new Node(y, x, +risk, length - 1)
    )
  );
  return lowestTotalRisk(riskLevelMap);
}

export function part2(input: string): number {
  const readOnlyMap = input.split("\n").map((line) =>
    line.split("").map((d) => +d)
  );
  const divisor = readOnlyMap.length;
  const length = 5 * divisor;
  const maxIndex = length - 1;
  const riskLevelMap = Array.from(
    { length },
    (_, y) =>
      Array.from({ length }, (_, x) => {
        const risk = readOnlyMap[y % divisor][x % divisor] +
          Math.floor(y / divisor) +
          Math.floor(x / divisor);
        return new Node(y, x, risk > 9 ? risk - 9 : risk, maxIndex);
      }),
  );
  return lowestTotalRisk(riskLevelMap);
}
