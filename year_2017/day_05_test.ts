import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_05.txt");

const EXAMPLE = `0
3
0
1
-3`;

describe("day 5", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(325922);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(10);
    });

    it("input", () => {
      expect(part2(input)).to.equal(24490906);
    });
  });
});
