export function part1(input: string): number {
  const stack = [JSON.parse(input)];
  let total = 0;
  while (stack.length) {
    const node = stack.pop();
    if (Number.isInteger(node)) {
      total += node;
    } else if (Array.isArray(node)) {
      stack.push(...node);
    } else if (node instanceof Object) {
      stack.push(...Object.values(node));
    }
  }
  return total;
}

export function part2(input: string): number {
  const stack = [JSON.parse(input)];
  let total = 0;
  while (stack.length) {
    const node = stack.pop();
    if (Number.isInteger(node)) {
      total += node;
    } else if (Array.isArray(node)) {
      stack.push(...node);
    } else if (node instanceof Object && !Object.values(node).includes("red")) {
      stack.push(...Object.values(node));
    }
  }
  return total;
}
