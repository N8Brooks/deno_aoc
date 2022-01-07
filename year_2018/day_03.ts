export function part1(input: string): number {
  let duplicateClaimCount = 0;
  const claims: number[][] = [];
  for (const line of input.split("\n")) {
    const [, x0, y0, width, height] = [...line.matchAll(/\d+/g)].map((d) => +d);
    for (let y = y0 + height - 1; y >= y0; y--) {
      const row = claims[y] ??= [];
      for (let x = x0 + width - 1; x >= x0; x--) {
        const count = row[x] ?? 0;
        if (row[x] === 1) {
          duplicateClaimCount++;
        }
        row[x] = count + 1;
      }
    }
  }
  return duplicateClaimCount;
}

export function part2(input: string): number {
  const uniqueIds: Set<number> = new Set();
  const claims: number[][] = [];
  for (const line of input.split("\n")) {
    const [id0, x0, y0, width, height] = [...line.matchAll(/\d+/g)]
      .map((d) => +d);
    let isDuplicated = false;
    for (let y = y0 + height - 1; y >= y0; y--) {
      const row = claims[y] ??= [];
      for (let x = x0 + width - 1; x >= x0; x--) {
        const id1 = row[x];
        if (id1) {
          uniqueIds.delete(id1);
          isDuplicated = true;
        }
        row[x] = id0;
      }
    }
    if (!isDuplicated) {
      uniqueIds.add(id0);
    }
  }
  const [uniqueId] = uniqueIds;
  return uniqueId;
}
