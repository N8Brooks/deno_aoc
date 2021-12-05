const NEIGHBORS = [
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [-1, -1],
  [0, -1],
  [1, -1],
];

export function part1(input: string): number {
  const n = +input;
  const row = Math.ceil((n + 1) ** 0.5 / 2 - 0.5);
  const col = Math.abs(n % (row + row) - row);
  return row + col - 1;
}

export function part2(input: string): number {
  const n = +input;
  let [x, y] = [0, 0];
  let key = `${x},${y}`;
  let val = 1;
  const grid = { [key]: val };

  do {
    if (x == 0 && y == 0) {
      [x, y] = [1, 0];
    } else if (-x < y) {
      if (y < x) {
        y += 1;
      } else {
        x -= 1;
      }
    } else {
      if (x < y) {
        y -= 1;
      } else {
        x += 1;
      }
    }
    key = `${x},${y}`;
    val = 0;
    for (const [xDelta, yDelta] of NEIGHBORS) {
      const neighborKey = `${x + xDelta},${y + yDelta}`;
      val += grid[neighborKey] ?? 0;
    }
    grid[key] = val;
  } while (val <= n);

  return val;
}
