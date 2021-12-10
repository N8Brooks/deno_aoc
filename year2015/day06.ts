const PATTERN =
  /((?:turn on)|(?:toggle)|(?:turn off)) (\d+),(\d+) through (\d+),(\d+)/g;

const add = (a: number, b: number): number => {
  return a + b;
};

export function part1(input: string): number {
  const lights: Uint8Array[] = Array.from(
    { length: 1000 },
    () => new Uint8Array(1000),
  );

  for (const [, instruction, x0, y0, x1, y1] of input.matchAll(PATTERN)) {
    for (let x = +x0; x <= +x1; x++) {
      for (let y = +y0; y <= +y1; y++) {
        if (instruction === "turn on") {
          lights[x][y] = 1;
        } else if (instruction === "toggle") {
          lights[x][y] = 1 - lights[x][y];
        } else {
          lights[x][y] = 0;
        }
      }
    }
  }

  return lights.reduce((sum, row) => sum + row.reduce(add, 0), 0);
}

export function part2(input: string): number {
  const brightness: Uint8ClampedArray[] = Array.from(
    { length: 1000 },
    () => new Uint8ClampedArray(1000),
  );

  for (const [, instruction, x0, y0, x1, y1] of input.matchAll(PATTERN)) {
    for (let x = +x0; x <= +x1; x++) {
      for (let y = +y0; y <= +y1; y++) {
        if (instruction === "turn on") {
          brightness[x][y] += 1;
        } else if (instruction === "toggle") {
          brightness[x][y] += 2;
        } else {
          brightness[x][y] -= 1;
        }
      }
    }
  }

  return brightness.reduce((sum, row) => sum + row.reduce(add), 0);
}
