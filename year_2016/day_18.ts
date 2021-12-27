export function safeTiles(row0: string, rowsLength: number): number {
  let row = row0.split("");
  let safeTileCount = 0;
  for (let y = 0; y < rowsLength; y++) {
    row = row.map((char, i) => {
      if (char === ".") {
        safeTileCount++;
      }
      return (row[i - 1] ?? ".") === (row[i + 1] ?? ".") ? "." : "^";
    });
  }
  return safeTileCount;
}

export function part1(input: string): number {
  return safeTiles(input, 40);
}

export function part2(input: string): number {
  return safeTiles(input, 400_000);
}
