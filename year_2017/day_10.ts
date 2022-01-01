import { chunk } from "../deps.ts";
import { decode } from "../util.ts";

const ADDITIONAL_LENGTHS = [17, 31, 73, 47, 23];

/** Applies knot hash `rounds` times for an `n` length hash with the given `lengths` */
const knotHash = (lengths: number[], n: number, rounds: number) => {
  const sparseHash = Array.from({ length: n }, (_, i) => i);
  let currentPosition = 0, skipSize = 0;
  for (let round = 0; round < rounds; round++) {
    for (const length of lengths) {
      let i = currentPosition;
      let j = i + length - 1;
      while (i < j) {
        const ri = i++ % n;
        const rj = j-- % n;
        const temp = sparseHash[ri];
        sparseHash[ri] = sparseHash[rj];
        sparseHash[rj] = temp;
      }
      currentPosition += length + skipSize;
      skipSize++;
    }
  }
  return sparseHash;
};

export function part1(input: string, n = 256): number {
  const lengths = input.split(",").map((d) => +d);
  const sparseHash = knotHash(lengths, n, 1);
  return sparseHash[0] * sparseHash[1];
}

export function part2(input: string): string {
  const charCodes = input.split("").map((char) => char.charCodeAt(0));
  const lengths = [...charCodes, ...ADDITIONAL_LENGTHS];
  const sparse = knotHash(lengths, 256, 64);
  const dense = chunk(sparse, 16).map((block) => block.reduce((a, b) => a ^ b));
  return decode(new Uint8Array(dense));
}
