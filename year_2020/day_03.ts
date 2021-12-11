export function part1(input: string): number {
  let trees = 0;
  input.split("\n").forEach((line, row) => {
    if (line[3 * row % line.length] === "#") {
      trees++;
    }
  });
  return trees;
}

export function part2(input: string): number {
  let a = 0, b = 0, c = 0, d = 0, e = 0;
  input.split("\n").forEach((line, row) => {
    if (line[row % line.length] === "#") {
      a++;
    }
    if (line[3 * row % line.length] === "#") {
      b++;
    }
    if (line[5 * row % line.length] === "#") {
      c++;
    }
    if (line[7 * row % line.length] === "#") {
      d++;
    }
    if (row % 2 === 0 && line[0.5 * row % line.length] === "#") {
      e++;
    }
  });
  return a * b * c * d * e;
}
