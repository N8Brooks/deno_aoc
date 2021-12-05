const rulePattern = /([a-z]+ [a-z]+) bags contain ([^\.]+)\./g;
const childPattern = /(\d+) ([a-z]+ [a-z]+) bag/g;

export function part1(input: string): number {
  const parents: Map<string, string[]> = new Map();
  for (const [, parent, rest] of input.matchAll(rulePattern)) {
    for (const [, , child] of rest.matchAll(childPattern)) {
      const array = parents.get(child) ?? [];
      array.push(parent);
      parents.set(child, array);
    }
  }

  const stack = ["shiny gold"];
  const memo: Set<string> = new Set();
  while (stack.length) {
    const node = stack.pop();
    if (node === undefined || memo.has(node)) {
      continue;
    }
    stack.push(...parents.get(node) ?? []);
    memo.add(node);
  }

  return memo.size - 1;
}

export function part2(input: string): number {
  const memo: Map<string, number> = new Map();
  const children: Map<string, [string, number][]> = new Map();
  for (const [, parent, rest] of input.matchAll(rulePattern)) {
    if (rest === "no other bags") {
      memo.set(parent, 0);
      continue;
    }
    const array: [string, number][] = [];
    for (const [, count, child] of rest.matchAll(childPattern)) {
      array.push([child, +count]);
    }
    children.set(parent, array);
  }

  const stack = ["shiny gold"];
  while (stack.length) {
    const parent = stack.pop();
    if (parent === undefined) {
      break;
    } else if (memo.has(parent)) {
      let count = 0;
      for (const [child, counts] of children.get(parent) ?? []) {
        count += (1 + (memo.get(child) ?? NaN)) * counts;
      }
      memo.set(parent, count);
    } else {
      stack.push(parent);
      for (const [child] of children.get(parent) ?? []) {
        stack.push(child);
      }
      memo.set(parent, NaN);
    }
  }

  return memo.get("shiny gold") ?? NaN;
}
