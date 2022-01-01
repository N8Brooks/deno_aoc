import { part2 as knotHash } from "./day_10.ts";

const GRID_LENGTH = 128;

export function part1(input: string): number {
  let squares = 0;
  for (let y = 0; y < GRID_LENGTH; y++) {
    const hash = knotHash(`${input}-${y}`);
    const bits = BigInt(`0x${hash}`).toString(2);
    squares += bits.replaceAll("0", "").length;
  }
  return squares;
}

export function part2(input: string): number {
  let regionCount = 0;
  const regions: number[] = [];
  const find = (i: number): number => {
    return regions[i] === i ? regions[i] : find(regions[i]!);
  };
  for (let y = 0; y < GRID_LENGTH; y++) {
    const hash = knotHash(`${input}-${y}`);
    const bits = BigInt(`0x${hash}`).toString(2).padStart(GRID_LENGTH, "0");
    bits.split("").forEach((bit, x) => {
      if (bit === "0") {
        return;
      }
      const i = y * GRID_LENGTH + x;
      const top = y > 0 ? find(i - GRID_LENGTH) : undefined!;
      const left = x > 0 ? find(i - 1) : undefined!;
      if (top === undefined && left === undefined) {
        regionCount++;
        regions[i] = i;
      } else if (top !== undefined && left !== undefined) {
        regionCount -= +(top !== left);
        regions[i] = regions[top] = regions[left] = i;
      } else if (top !== undefined) {
        regions[i] = regions[top] = i;
      } else if (left !== undefined) {
        regions[i] = regions[left] = i;
      }
    });
  }
  return regionCount;
}
