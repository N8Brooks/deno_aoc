import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const EXAMPLE = `3,4,3,1,2`;

const input = await Deno.readTextFile("year_2021/testdata/day_06.txt");

describe("day 6", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5934);
    });

    it("input", () => {
      expect(part1(input)).to.equal(389726);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(26984457539);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1743335992042);
    });
  });
});
