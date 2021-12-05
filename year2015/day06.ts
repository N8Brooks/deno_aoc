const pattern =
  /((?:turn on)|(?:toggle)|(?:turn off)) (\d+),(\d+) through (\d+),(\d+)/g;

export function part1(input: string): number {
  const lights: boolean[][] = Array.from({ length: 1000 }, () => []);

  for (const [, instruction, x0, y0, x1, y1] of input.matchAll(pattern)) {
    for (let x = +x0; x <= +x1; x++) {
      for (let y = +y0; y <= +y1; y++) {
        if (instruction === "turn on") {
          lights[x][y] = true;
        } else if (instruction === "toggle") {
          lights[x][y] = !lights[x][y];
        } else {
          lights[x][y] = false;
        }
      }
    }
  }

  return lights.reduce((sum, row) => sum + row.reduce(add, 0), 0);

  function add(sum: number, light: boolean): number {
    return light ? sum + 1 : sum;
  }
}

export function part2(input: string): number {
  const brightness: number[][] = Array.from(
    { length: 1000 },
    () => Array(1000).fill(0),
  );

  for (const [, instruction, x0, y0, x1, y1] of input.matchAll(pattern)) {
    for (let x = +x0; x <= +x1; x++) {
      for (let y = +y0; y <= +y1; y++) {
        if (instruction === "turn on") {
          brightness[x][y] += 1;
        } else if (instruction === "toggle") {
          brightness[x][y] += 2;
        } else if (brightness[x][y] > 0) {
          brightness[x][y] -= 1;
        }
      }
    }
  }

  return brightness.reduce((sum, row) => sum + row.reduce(add), 0);

  function add(a: number, b: number): number {
    return a + b;
  }
}
