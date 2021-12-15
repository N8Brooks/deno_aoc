import { BinaryHeap } from "../deps.ts";

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
  ) {
  }

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

const lowestTotalRisk = (riskLevelMap: number[][]): number => {
  // Map risk levels to `Node` class
  const length = riskLevelMap.length;
  const maxIndex = length - 1;
  const nodes = riskLevelMap.map((row, y) =>
    row.map((risk, x) => new Node(y, x, risk, maxIndex))
  );

  // Begin with the first node
  const startingNode = nodes[0][0];
  startingNode.gScore = 0;
  startingNode.fScore = startingNode.heuristic();
  startingNode.open = true;

  // Discovered nodes to be investigated for a possibly lower risk path
  const openHeap = BinaryHeap.from([startingNode], {
    compare: (a: Node, b: Node) => a.fScore - b.fScore,
  });

  while (openHeap.length) {
    // Take next node
    const currentNode = openHeap.pop()!;
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
          openHeap.push(neighboringNode);
          neighboringNode.open = true;
        }
      }
    }
  }

  throw Error("Did not find end of cave");
};

export function part1(input: string): number {
  const riskLevelMap = input.split("\n").map((line) =>
    line.split("").map((d) => +d)
  );
  return lowestTotalRisk(riskLevelMap);
}

export function part2(input: string): number {
  const readOnlyMap = input.split("\n").map((line) =>
    line.split("").map((d) => +d)
  );
  const length = readOnlyMap.length;
  const riskLevelMap = Array.from(
    { length: 5 * length },
    (_, y) =>
      Array.from({ length: 5 * length }, (_, x) => {
        const risk = readOnlyMap[y % length][x % length] +
          Math.floor(y / length) +
          Math.floor(x / length);
        return risk > 9 ? risk - 9 : risk;
      }),
  );
  return lowestTotalRisk(riskLevelMap);
}
