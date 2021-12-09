const pattern = /Sue (\d+): ([^\n]*)/g;

const targetSueEntries: Record<string, number> = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

export function part1(input: string): number {
  for (const [, sueNumber, sueInput] of input.matchAll(pattern)) {
    const sueEntries = sueInput.split(", ").map((entry) => entry.split(": "));
    const sueObject = Object.fromEntries(sueEntries);
    loop: {
      for (const [targetKey, targetValue] of Object.entries(targetSueEntries)) {
        if (targetKey in sueObject && +sueObject[targetKey] !== targetValue) {
          break loop;
        }
      }
      return +sueNumber;
    }
  }

  throw Error("no sue detected");
}

export function part2(input: string): number {
  for (const [, sueNumber, sueInput] of input.matchAll(pattern)) {
    const sueEntries = sueInput.split(", ").map((entry) => entry.split(": "));
    const {
      cats = Infinity,
      trees = Infinity,
      pomeranians = -Infinity,
      goldfish = -Infinity,
      ...sueObject
    } = Object.fromEntries(sueEntries);

    if (
      cats <= targetSueEntries.cats ||
      trees <= targetSueEntries.trees ||
      pomeranians >= targetSueEntries.pomeranians ||
      goldfish >= targetSueEntries.goldfish
    ) {
      continue;
    }

    loop: {
      for (const [targetKey, targetValue] of Object.entries(targetSueEntries)) {
        if (targetKey in sueObject && +sueObject[targetKey] !== targetValue) {
          break loop;
        }
      }
      return +sueNumber;
    }
  }

  throw Error("no sue detected");
}
