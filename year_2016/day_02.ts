const directions: Record<string, [number, number]> = {
  U: [0, -1],
  D: [0, 1],
  L: [-1, 0],
  R: [1, 0],
};

type Key = string | undefined;

const keypad1: Key[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

const keypad2: Key[][] = [
  [undefined, undefined, "1"],
  [undefined, "2", "3", "4"],
  ["5", "6", "7", "8", "9"],
  [undefined, "A", "B", "C"],
  [undefined, undefined, "D"],
];

export function part1(input: string): string {
  return getKeycode(input, keypad1, [1, 1]);
}

export function part2(input: string): string {
  return getKeycode(input, keypad2, [0, 2]);
}

function getKeycode(input: string, keypad: Key[][], start: [number, number]) {
  let [previousRow, previousCol] = start;
  const keycode: string[] = [];
  for (const line of input.split("\n")) {
    for (const char of line) {
      const [rowDelta, colDelta] = directions[char];
      const currentCol = previousCol + colDelta;
      if (keypad[currentCol] === undefined) {
        continue;
      }
      const currentRow = previousRow + rowDelta;
      if (keypad[currentCol][currentRow] === undefined) {
        continue;
      }
      [previousRow, previousCol] = [currentRow, currentCol];
    }
    keycode.push(keypad[previousCol][previousRow] as string);
  }
  return keycode.join("");
}
