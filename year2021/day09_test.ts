import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day09.ts";

const EXAMPLE = `2199943210
3987894921
9856789892
8767896789
9899965678`;

const input = await Deno.readTextFile("year2021/testdata/day09.txt");

describe("day09", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(15);
    });

    it("input", () => {
      expect(part1(input)).to.equal(500);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(1134);
    });

    it("input", () => {
      expect(part2(input)).to.equal(970200);
    });
  });
});
