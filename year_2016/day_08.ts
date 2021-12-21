import { chunk, zip } from "../deps.ts";

const LETTER_TO_CHAR: Record<string, string> = {
  ".####.\n#....#\n#....#\n.#..#.\n......": "C",
  "######\n#.#..#\n#.#..#\n#....#\n......": "E",
  "......\n#....#\n######\n#....#\n......": "I",
  "######\n.....#\n.....#\n.....#\n......": "L",
  ".####.\n#....#\n#....#\n.####.\n......": "O",
  "######\n#..#..\n#..##.\n.##..#\n......": "R",
  "#####.\n.....#\n.....#\n#####.\n......": "U",
};

const requirementsTelephone = (input: string): number[][] => {
  const screen = Array.from({ length: 6 }, () => Array(50).fill(0));
  for (const line of input.split("\n")) {
    const [, width, height, axis, position, rotation] = line.match(
      /(\d+)x(\d+)|([xy])=(\d+) by (\d+)/,
    )!;
    switch (axis) {
      case "x": {
        const x = +position;
        const k = +rotation % 6;
        const col = screen.map((row) => row[x]);
        col.unshift(...col.splice(6 - k, k));
        col.forEach((pixel, y) => screen[y][x] = pixel);
        break;
      }
      case "y": {
        const y = +position;
        const k = +rotation % 50;
        const row = screen[y];
        row.unshift(...row.splice(50 - k, k));
        break;
      }
      default: {
        for (let y = 0; y < +height; y++) {
          for (let x = 0; x < +width; x++) {
            screen[y][x] = 1;
          }
        }
      }
    }
  }
  return screen;
};

export function part1(input: string): number {
  const screen = requirementsTelephone(input);
  let litPixelsCount = 0;
  for (const row of screen) {
    litPixelsCount += row.reduce((sum, pixel) => sum + pixel);
  }
  return litPixelsCount;
}

export function part2(input: string): string {
  const screen = requirementsTelephone(input);
  return chunk(zip(...screen), 5)
    .map((pixels) => {
      const letter = pixels
        .map((row) => row.map((pixel) => pixel ? "#" : ".").join(""))
        .join("\n");
      return LETTER_TO_CHAR[letter];
    })
    .join("");
}
