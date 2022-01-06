export function part1(input: string): number {
  let twos = 0, threes = 0;
  for (const boxId of input.split("\n")) {
    const counts: Record<string, number> = {};
    for (const letter of boxId) {
      const count = counts[letter] ?? 0;
      counts[letter] = count + 1;
    }
    const values = Object.values(counts);
    twos += +values.includes(2);
    threes += +values.includes(3);
  }
  return twos * threes;
}

export function part2(input: string): string {
  const partialIds: Set<string> = new Set();
  for (const boxId of input.split("\n")) {
    const update: string[] = [];
    const [_, ...letters] = boxId.split("");
    for (let i = 0; i < boxId.length; i++) {
      const partialId = letters.join("");
      if (partialIds.has(partialId)) {
        return partialId;
      }
      update.push(partialId);
      letters[i] = boxId[i];
    }
    update.forEach((partialId) => partialIds.add(partialId));
  }
  throw new Error("No matching box ids found");
}
