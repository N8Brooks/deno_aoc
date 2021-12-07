export function part1(input: string): number {
  const crabs = input.split(",").map(Number);

  const lo = Math.min(...crabs);
  const hi = Math.max(...crabs);

  let minTotal = Infinity;
  for (let depth = lo; depth < hi; depth++) {
    let total = 0;
    for (const crab of crabs) {
      total += Math.abs(crab - depth);
    }
    minTotal = Math.min(minTotal, total);
  }

  return minTotal;
}

export function part2(input: string): number {
  const crabs = input.split(",").map(Number);

  const lo = Math.min(...crabs);
  const hi = Math.max(...crabs);

  let minTotal = Infinity;
  for (let depth = lo; depth < hi; depth++) {
    let total = 0;
    for (const crab of crabs) {
      const dist = Math.abs(crab - depth);
      total += (1 + dist) * dist / 2;
    }
    minTotal = Math.min(minTotal, total);
  }

  return minTotal;
}
