import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_17.ts";

const EXAMPLE = `.#.
..#
###`;

const input = await Deno.readTextFile("year_2020/testdata/day_17.txt");

describe("day 17", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(112);
    });

    it("input", () => {
      expect(part1(input)).to.equal(368);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(848);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2696);
    });
  });
});
