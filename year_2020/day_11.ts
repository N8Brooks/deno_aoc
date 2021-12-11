const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function part1(input: string): number {
  const [seats] = indexSeats(input);
  const neighbors: number[][] = [];
  for (const [y, row] of seats.entries()) {
    for (const x of row.keys()) {
      neighbors.push(
        DIRECTIONS
          .map(([yd, xd]) => seats.get(y + yd)?.get(x + xd) ?? NaN)
          .filter((index) => !isNaN(index)),
      );
    }
  }
  return simulate(neighbors, 4);
}

export function part2(input: string): number {
  const [seats, height, width] = indexSeats(input);
  const neighbors: number[][] = [];
  for (const [y1, row] of seats.entries()) {
    for (const x1 of row.keys()) {
      neighbors.push(
        DIRECTIONS
          .map(([yd, xd]) => adjacent(y1, x1, yd, xd))
          .filter((index) => !isNaN(index)),
      );
    }
  }
  return simulate(neighbors, 5);

  function adjacent(y1: number, x1: number, yd: number, xd: number): number {
    let y2 = y1 + yd;
    let x2 = x1 + xd;
    while (0 <= y2 && y2 < height && 0 <= x2 && x2 < width) {
      const index = seats.get(y2)?.get(x2) ?? NaN;
      if (!isNaN(index)) {
        return index;
      }
      y2 += yd;
      x2 += xd;
    }
    return NaN;
  }
}

function indexSeats(
  input: string,
): [Map<number, Map<number, number>>, number, number] {
  const processed = input.split("\n");
  let count = 0;

  return [
    new Map(processed.map((row, y) => [y, new Map(indexRow(row))])),
    processed.length,
    processed[0].length,
  ];

  function indexRow(row: string): [number, number][] {
    return row
      .split("")
      .map((seat, x): [string, number] => [seat, x])
      .filter(([seat]) => seat === "L")
      .map(([, x]) => [x, count++]);
  }
}

function simulate(neighbors: number[][], upperBound: number): number {
  const length = neighbors.length;

  let previous: number[];
  let current = Array(length).fill(false);

  do {
    previous = current;
    current = current.map((seat, i) => {
      const count = neighbors[i].reduce((sum, j) => sum + current[j], 0);
      return seat ? count < upperBound : count === 0;
    });
  } while (current.some((seat, i) => previous[i] !== seat));

  return current.reduce((sum, seat) => sum + seat, 0);
}
