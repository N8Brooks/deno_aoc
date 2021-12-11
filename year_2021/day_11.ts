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
  let flashedCount = 0;
  const octopi = input.split("\n").map((line) =>
    line.split("").map((char) => +char)
  );
  for (let step = 0; step < 100; step++) {
    const flashed: [number, number][] = [];
    for (let y = 0; y < octopi.length; y++) {
      for (let x = 0; x < octopi[0].length; x++) {
        if (++octopi[y][x] === 10) {
          flashed.push([y, x]);
        }
      }
    }
    while (flashed.length) {
      const [y0, x0] = flashed.pop()!;
      flashedCount++;
      for (const [yd, xd] of DIRECTIONS) {
        const y1 = y0 + yd;
        if (y1 < 0 || octopi.length <= y1) {
          continue;
        }
        const x1 = x0 + xd;
        if (x1 < 0 || octopi[0].length <= x1) {
          continue;
        }
        if (++octopi[y1][x1] === 10) {
          flashed.push([y1, x1]);
        }
      }
    }
    for (let y = 0; y < octopi.length; y++) {
      for (let x = 0; x < octopi[0].length; x++) {
        if (octopi[y][x] >= 10) {
          octopi[y][x] = 0;
        }
      }
    }
  }
  return flashedCount;
}

export function part2(input: string): number {
  const octopi = input.split("\n").map((line) =>
    line.split("").map((char) => +char)
  );
  let step = 0, flashedCount;
  do {
    step++;
    flashedCount = 0;
    const flashed: [number, number][] = [];
    for (let y = 0; y < octopi.length; y++) {
      for (let x = 0; x < octopi[0].length; x++) {
        if (++octopi[y][x] === 10) {
          flashed.push([y, x]);
        }
      }
    }
    while (flashed.length) {
      const [y0, x0] = flashed.pop()!;
      flashedCount++;
      for (const [yd, xd] of DIRECTIONS) {
        const y1 = y0 + yd;
        if (y1 < 0 || octopi.length <= y1) {
          continue;
        }
        const x1 = x0 + xd;
        if (x1 < 0 || octopi[0].length <= x1) {
          continue;
        }
        if (++octopi[y1][x1] === 10) {
          flashed.push([y1, x1]);
        }
      }
    }
    for (let y = 0; y < octopi.length; y++) {
      for (let x = 0; x < octopi[0].length; x++) {
        if (octopi[y][x] >= 10) {
          octopi[y][x] = 0;
        }
      }
    }
  } while (flashedCount !== octopi.length * octopi[0].length);
  return step;
}
