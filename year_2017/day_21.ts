import { chunk, zip } from "../deps.ts";

const INITIAL_PATTERN = ".#./..#/###";

const rotate = (matrix: string[][]): string[][] => {
  return matrix[0].map((_, i, { length }) =>
    matrix.map((row) => row[length - i - 1])
  );
};

function* translations(input: string): Generator<string> {
  let tile = input.split("/").map((row) => row.split(""));
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
  tile.reverse();
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
  tile = rotate(tile);
  yield tile.map((tile) => tile.join("")).join("/");
}

export const sumOnPixels = (input: string, iterations: number): number => {
  const rulesEntries = input
    .split("\n")
    .map((line): [string, string[][]][] => {
      const [match, result] = line.split(" => ");
      const output = result.split("/").map((row) => row.split(""));
      return [...translations(match)].map((t) => [t, output]);
    })
    .flat();
  const rules = Object.fromEntries(rulesEntries);
  let pattern = INITIAL_PATTERN.split("/").map((row) => row.split(""));
  for (let i = 0; i < iterations; i++) {
    const size = pattern.length & 1 ? 3 : 2;
    pattern = chunk(pattern, size)
      .map((row) => {
        const squares = zip(...row);
        const translated = chunk(squares, size)
          .map((square) => rules[square.map((row) => row.join("")).join("/")])
          .flat();
        return zip(...translated);
      })
      .flat();
  }
  return pattern.reduce((sum, pixels) => {
    return sum + pixels.reduce((sum, pixel) => sum + +(pixel === "#"), 0);
  }, 0);
};

export function part1(input: string): number {
  return sumOnPixels(input, 5);
}

export function part2(input: string): number {
  return sumOnPixels(input, 18);
}
