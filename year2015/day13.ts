const pattern =
  /(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)./g;

export function part1(input: string): number {
  return family(input, 0);
}

export function part2(input: string): number {
  return family(input, 1);
}

function family(input: string, buffer: number): number {
  const individuals: Map<string, number> = new Map();
  const pairs: Map<number, number> = new Map();

  for (const [, aName, sign, val, bName] of input.matchAll(pattern)) {
    const a = defaultIndividual(aName);
    const b = defaultIndividual(bName);
    const pair = (1 << a) | (1 << b);
    const current = pairs.get(pair) ?? 0;
    const difference = sign === "gain" ? +val : -val;
    pairs.set(pair, current + difference);
  }

  const n = individuals.size + buffer;
  const memo: Map<string, number> = new Map();

  return happiness(0, 1);

  function defaultIndividual(individual: string): number {
    const index = individuals.get(individual) ?? individuals.size;
    individuals.set(individual, index);
    return index;
  }

  function happiness(i: number, s: number): number {
    const key = `${i},${s}`;

    if (memo.has(key)) {
      return memo.get(key) ?? NaN;
    }

    if (s === (1 << n) - 1) {
      return pairs.get(1 | (1 << i)) ?? 0;
    }

    const max = maxHappiness(i, s);
    memo.set(key, max);

    return max;
  }

  function maxHappiness(i: number, s: number) {
    let max = 0;
    for (let j = 0; j < n; j++) {
      if ((s & (1 << j)) === 0) {
        const current = pairs.get((1 << i) | (1 << j)) ?? 0;
        const difference = happiness(j, s | (1 << j));
        max = Math.max(max, current + difference);
      }
    }
    return max;
  }
}
