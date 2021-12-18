import { permutations } from "../deps.ts";

interface Node {
  /** How many times this node is nested left */
  left: number;

  /** How many times this node is nested right */
  right: number;

  /** The number of the node */
  value: number;
}

/** Parsed `input` into a list of `Node`s */
const parsePairs = (line: string): Node[] => {
  const pairs: Node[] = [];
  let left = 0, right = 0;
  for (const char of line) {
    switch (char) {
      case "[":
        left++;
        break;
      case "]":
        right--;
        break;
      case ",":
        left--;
        right++;
        break;
      default:
        pairs.push({ value: +char, left, right });
    }
  }
  return pairs;
};

/** Explodes `Node`s in-place and returns true or returns false if unsuccessful */
const explode = (nodes: Node[]): boolean => {
  let previousNode = nodes[0];
  for (let j = 1; j < nodes.length; j++) {
    const currentNode = nodes[j];
    if (
      previousNode.left + previousNode.right > 4 &&
      previousNode.left - 1 === currentNode.left &&
      previousNode.right + 1 === currentNode.right
    ) {
      if (j - 2 >= 0) {
        nodes[j - 2].value += nodes[j - 1].value;
      }
      if (j + 1 < nodes.length) {
        nodes[j + 1].value += nodes[j].value;
      }
      const replacement = {
        value: 0,
        left: currentNode.left,
        right: previousNode.right,
      };
      nodes.splice(j - 1, 2, replacement);
      return true;
    }
    previousNode = currentNode;
  }
  return false;
};

/** Splits `Node`s in-place and returns true or returns false if unsuccessful */
const split = (nodes: Node[]): boolean => {
  const i = nodes.findIndex((node) => node.value >= 10);
  if (i < 0) {
    return false;
  }
  const { value, left, right } = nodes[i];
  const a = { value: Math.floor(value / 2), left: left + 1, right };
  const b = { value: Math.ceil(value / 2), left, right: right + 1 };
  nodes.splice(i, 1, a, b);
  return true;
};

/** Adds two `Array`s of `Node`s out-of-place */
const add = (a: Node[], b: Node[]): Node[] => {
  const nodes = [
    ...a.map(({ value, left, right }) => ({ value, left: left + 1, right })),
    ...b.map(({ value, left, right }) => ({ value, left, right: right + 1 })),
  ];
  while (explode(nodes) || split(nodes));
  return nodes;
};

/** The magnitude of a single node */
const magnitude = ({ left, right, value }: Node): number => {
  return 3 ** left * 2 ** right * value;
};

export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) => parsePairs(line))
    .reduce((a, b) => add(a, b))
    .reduce((sum, node) => sum + magnitude(node), 0);
}

export function part2(input: string): number {
  const shellfishNumbers = input
    .split("\n")
    .map((line) => parsePairs(line));
  return [...permutations(shellfishNumbers, 2)]
    .map(([a, b]) => add(a, b))
    .map((nodes) => nodes.reduce((sum, node) => sum + magnitude(node), 0))
    .reduce((magA, magB) => magA > magB ? magA : magB);
}
