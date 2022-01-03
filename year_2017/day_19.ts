export function part1(input: string): string {
  const routingDiagram = input.split("\n");
  const letters: string[] = [];
  let [col, row] = [routingDiagram[0].search(/\|/g), 0];
  let [colDelta, rowDelta] = [0, 1];
  let point = "|";
  while (point !== " ") {
    if (point === "+") {
      [rowDelta, colDelta] = colDelta
        ? [routingDiagram[row - 1][col] !== " " ? -1 : 1, 0]
        : [0, routingDiagram[row][col - 1] !== " " ? -1 : 1];
    } else if (point !== "|" && point !== "-") {
      letters.push(point);
    }
    row += rowDelta;
    col += colDelta;
    point = routingDiagram[row][col];
  }
  return letters.join("");
}

export function part2(input: string): number {
  const routingDiagram = input.split("\n");
  let touchingCount = 0;
  for (let row = 1; row < routingDiagram.length; row++) {
    for (let col = 1; col < routingDiagram[row].length; col++) {
      if (routingDiagram[row][col] === " ") {
        continue;
      }
      if (routingDiagram[row - 1][col] !== " ") {
        touchingCount++;
      }
      if (routingDiagram[row][col - 1] !== " ") {
        touchingCount++;
      }
    }
  }
  return touchingCount + 1;
}
