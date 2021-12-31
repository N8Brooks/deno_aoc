export function part1(input: string): string {
  const parents: string[] = [];
  const children: Set<string> = new Set();
  for (const line of input.split("\n")) {
    const [, parent, others] = line.match(/(\w+) \(\d+\)(?: -> ([\w, ]+))?/)!;
    parents.push(parent);
    others
      ?.split(", ")
      .forEach((child) => {
        children.add(child);
      });
  }
  return parents.find((parent) => !children.has(parent))!;
}

/** Utility `class` for parsing tree defined by problem */
class Node {
  /** Reference to program directly above it */
  parent?: Node;

  /** Reference to programs below it */
  children?: Node[];

  /** Cache for `netWeight` */
  #netWeight?: number;

  constructor(public readonly name: string, public readonly weight: number) {}

  /** Returns the `Node` with no parent */
  getRoot(): Node {
    // deno-lint-ignore no-this-alias
    let node: Node = this;
    while (node.parent) {
      node = node.parent;
    }
    return node;
  }

  /** Returns the deepest odd `Node` if it exists */
  getOddNode(): Node | undefined {
    if (!this.children) {
      return;
    }
    const [child0, child1, ...children] = this.children;
    const child2 = child0.netWeight === child1.netWeight
      ? children.find((child) => child0.netWeight !== child.netWeight)
      : children[0];
    if (!child2) {
      return;
    }
    const oddNode = child0.netWeight === child1.netWeight
      ? child2
      : child0.netWeight === child2.netWeight
      ? child1
      : child0;
    const oddGrandChild = oddNode.getOddNode();
    return oddGrandChild || oddNode;
  }

  /** Returns any sibling of this `Node` if it exists */
  getSibling(): Node | undefined {
    return this.parent?.children?.find((child) => child !== this);
  }

  /** Calculates the cumulative weight of `this` and its `children` */
  get netWeight(): number {
    if (!this.#netWeight) {
      const subWeight = this.children?.reduce((sum, child) => {
        return sum + child.netWeight;
      }, 0) ?? 0;
      this.#netWeight = this.weight + subWeight;
    }
    return this.#netWeight;
  }
}

export function part2(input: string): number {
  const relationships: [string, string[]][] = [];
  // Retrieve all nodes
  const nodes = new Map(
    input.split("\n").map((line) => {
      const [, name, weight, children] = line.match(
        /(\w+) \((\d+)\)(?: -> ([a-z, ]+))?/,
      )!;
      if (children) {
        relationships.push([name, children.split(", ")]);
      }
      return [name, new Node(name, +weight)];
    }),
  );
  // All parent-child relationships
  for (const [parentName, childNames] of relationships) {
    const parent = nodes.get(parentName)!;
    parent.children = childNames.map((name) => nodes.get(name)!);
    parent.children.forEach((child) => {
      child.parent = parent;
    });
  }
  // Calculate and return necessary weight delta
  const [[, firstNode]] = nodes;
  const rootNode = firstNode.getRoot();
  const oddNode = rootNode.getOddNode()!;
  const regularNode = oddNode.getSibling()!;
  const weightDelta = regularNode.netWeight - oddNode.netWeight;
  return oddNode.weight + weightDelta;
}
