import { multiplyComplex } from "../util.ts";

const BUFFER = 256;

const LEFT_TURN: [number, number] = [0, 1];

const RIGHT_TURN: [number, number] = [0, -1];

const REVERSE: [number, number] = [-1, 0];

export function part1(input: string): number {
  const infected = input
    .split("\n")
    .map((row) => [...row].map((char) => char === "#"));
  let direction: [number, number] = [-1, 0];
  let row = Math.floor(infected.length / 2);
  let col = Math.floor(infected[0].length / 2);
  let infections = 0;
  for (let i = 0; i < 10_000; i++) {
    const infectedRow = infected[row] ??= [];
    if (infectedRow[col]) {
      infectedRow[col] = false;
      direction = multiplyComplex(direction, RIGHT_TURN);
    } else {
      infectedRow[col] = true;
      direction = multiplyComplex(direction, LEFT_TURN);
      infections++;
    }
    row += direction[0];
    col += direction[1];
  }
  return infections;
}

enum NodeState {
  Clean = 0,
  Weakened = 1,
  Infected = 2,
  Flagged = 3,
}

export function part2(input: string): number {
  const infected = Array.from(
    { length: 2 * BUFFER },
    () => new Uint8Array(2 * BUFFER),
  );
  const map = input.split("\n");
  map.forEach((inputRow, row) => {
    for (let col = 0; col < inputRow.length; col++) {
      infected[row + BUFFER][col + BUFFER] = inputRow[col] === "#"
        ? NodeState.Infected
        : NodeState.Clean;
    }
  });
  let direction: [number, number] = [-1, 0];
  let row = BUFFER + Math.floor(map.length / 2);
  let col = BUFFER + Math.floor(map[0].length / 2);
  let infections = 0;
  for (let i = 0; i < 1e7; i++) {
    switch (infected[row][col]) {
      case undefined:
      case NodeState.Clean:
        infected[row][col] = NodeState.Weakened;
        direction = multiplyComplex(direction, LEFT_TURN);
        break;
      case NodeState.Weakened:
        infected[row][col] = NodeState.Infected;
        infections++;
        break;
      case NodeState.Infected:
        infected[row][col] = NodeState.Flagged;
        direction = multiplyComplex(direction, RIGHT_TURN);
        break;
      case NodeState.Flagged:
        infected[row][col] = NodeState.Clean;
        direction = multiplyComplex(direction, REVERSE);
        break;
      default:
        throw new Error("uho");
    }
    row += direction[0];
    col += direction[1];
  }
  return infections;
}
