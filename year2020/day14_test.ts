import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day14.ts";

const example1 = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;

const example2 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;

const input = await Deno.readTextFile("year2020/testdata/day14.txt");

describe("day14", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example1)).to.equal(165n);
    });

    it("input", () => {
      expect(part1(input)).to.equal(14722016054794n);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example2)).to.equal(208);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3618217244644);
    });
  });
});
