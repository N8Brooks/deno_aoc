export function part1(input: string): number {
  return input
    .split("\n")
    .map((row) => isTriangle(parseRow(row)))
    .reduce((sum, tri) => tri ? sum + 1 : sum, 0);
}

export function part2(input: string): number {
  let total = 0;
  const sides: [number[], number[], number[]] = [[], [], []];
  input
    .split("\n")
    .forEach((row, i) => {
      parseRow(row).forEach((abc, i) => sides[i].push(abc));
      if (i % 3 === 2) {
        sides.forEach((side) => {
          if (isTriangle(side)) {
            total++;
          }
          side.length = 0;
        });
      }
    });
  return total;
}

function parseRow(row: string): [number, number, number] {
  const [a, b, c] = row.trimStart().split(/\s+/);
  return [+a, +b, +c];
}

function isTriangle([a, b, c]: number[]): boolean {
  return (a + b > c) && (a + c > b) && (b + c > a);
}
