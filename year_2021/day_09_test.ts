import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_09.ts";

const EXAMPLE = `2199943210
3987894921
9856789892
8767896789
9899965678`;

const input = await Deno.readTextFile("year_2021/testdata/day_09.txt");

describe("day 9", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(15);
    });

    it("input", () => {
      expect(part1(input)).to.equal(500);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(1134);
    });

    it("input", () => {
      expect(part2(input)).to.equal(970200);
    });
  });
});
