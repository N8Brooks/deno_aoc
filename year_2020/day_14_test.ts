import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_14.ts";

const EXAMPLE_1 = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;

const EXAMPLE_2 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;

const input = await Deno.readTextFile("year_2020/testdata/day_14.txt");

describe("day 14", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE_1)).to.equal(165n);
    });

    it("input", () => {
      expect(part1(input)).to.equal(14722016054794n);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE_2)).to.equal(208);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3618217244644);
    });
  });
});
