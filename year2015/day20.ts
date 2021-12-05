export function part1(input: string): number {
  const n = Math.ceil(+input / 10);
  const houses = Array(n + 2).fill(1, 1);
  for (let elf = 2; elf < n; elf++) {
    for (let multiple = elf; multiple < n; multiple += elf) {
      houses[multiple] += elf;
    }
  }
  for (let i = 0; i < n; i++) {
    if (houses[i] >= n) {
      return i;
    }
  }
  throw Error("no house with at least that many presents found");
}

export function part2(input: string): number {
  const n = Math.ceil(+input / 10 + 2);
  const houses = Array(n + 2).fill(1, 1);
  for (let elf = 2; elf < n; elf++) {
    const stop = Math.min(n, elf * 50 + 1);
    for (let multiple = elf; multiple < stop; multiple += elf) {
      houses[multiple] += 1.1 * elf;
    }
  }
  for (let i = 0; i < n; i++) {
    if (houses[i] >= n) {
      return i;
    }
  }
  throw Error("no house with at least that many presents found");
}
