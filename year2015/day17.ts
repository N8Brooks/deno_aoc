export function part1(input: string, target: number): number {
  const counter = Array(target + 1).fill(0, 1);
  counter[0] = 1;

  for (const line of input.split("\n")) {
    const c = +line;
    for (let t = target; t >= c; t--) {
      counter[t] += counter[t - c];
    }
  }

  return counter[target];
}

export function part2(input: string, target: number): number {
  const counter: number[][][] = Array.from({ length: target + 1 }, () => []);
  counter[0].push([]);

  for (const line of input.split("\n")) {
    const c = +line;
    for (let t = target; t >= c; t--) {
      const update = counter[t - c].map((arr) => arr.concat(c));
      counter[t].push(...update);
    }
  }

  let minLength = Infinity, minCount = 0;
  for (const { length } of counter[target]) {
    if (length === minLength) {
      minCount++;
    } else if (length < minLength) {
      minLength = length;
      minCount = 1;
    }
  }

  return minCount;
}
