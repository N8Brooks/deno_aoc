export function part1(data: string): number {
  const nums = data.split("\n").map((line) => line.split(" -> "));

  const coords: Map<string, number> = new Map();
  for (const [a, b] of nums) {
    const [x1, y1] = a.split(",").map(Number);
    const [x2, y2] = b.split(",").map(Number);

    if (x1 === x2) {
      const [yStart, yStop] = [y1, y2].sort((a, b) => a - b);
      for (let y = yStart; y <= yStop; y++) {
        const key = [x1, y].join();
        const count = coords.get(key) ?? 0;
        coords.set(key, count + 1);
      }
    } else if (y1 === y2) {
      const [xStart, xStop] = [x1, x2].sort((a, b) => a - b);
      for (let x = xStart; x <= xStop; x++) {
        const key = [x, y1].join();
        const count = coords.get(key) ?? 0;
        coords.set(key, count + 1);
      }
    }
  }

  let count = 0;
  for (const val of coords.values()) {
    if (val > 1) {
      count++;
    }
  }

  return count;
}

export function part2(data: string): number {
  const nums = data.split("\n").map((line) => line.split(" -> "));

  const coords: Map<string, number> = new Map();
  for (const [a, b] of nums) {
    const [x1, y1] = a.split(",").map(Number);
    const [x2, y2] = b.split(",").map(Number);

    const xd = Math.sign(x2 - x1);
    const yd = Math.sign(y2 - y1);

    let x = x1, y = y1;
    if (x1 !== x2 || y1 !== y2) {
      const key = [x1, y1].join();
      const count = coords.get(key) ?? 0;
      coords.set(key, count + 1);
    }
    do {
      x += xd;
      y += yd;
      const key = [x, y].join();
      const count = coords.get(key) ?? 0;
      coords.set(key, count + 1);
    } while (x !== x2 || y !== y2);
  }

  let count = 0;
  for (const val of coords.values()) {
    if (val > 1) {
      count++;
    }
  }

  return count;
}
