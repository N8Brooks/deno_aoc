import { zip } from "../deps.ts";
import { crt } from "../util.ts";

const PART_2_INPUT =
  "Disc #7 has 11 positions; at time=0, it is at position 0.";

export function part1(input: string): number {
  const [
    positionLengths,
    initialPositions,
  ] = zip(
    ...input.split("\n").map((line, i): number[] => {
      const [, positionLength, , initialPosition] = line.matchAll(/\d+/g);
      return [+positionLength, -initialPosition - i - 1];
    }),
  );
  return crt(positionLengths, initialPositions);
}

export function part2(input: string): number {
  const [
    positionLengths,
    initialPositions,
  ] = zip(
    ...[
      ...input.split("\n"),
      PART_2_INPUT,
    ].map((line, i): number[] => {
      const [, positionLength, , initialPosition] = line.matchAll(/\d+/g);
      return [+positionLength, -initialPosition - i - 1];
    }),
  );
  return crt(positionLengths, initialPositions);
}
