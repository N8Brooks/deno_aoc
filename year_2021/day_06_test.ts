import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day06.ts";

const EXAMPLE = `3,4,3,1,2`;

const input = await Deno.readTextFile("year2021/testdata/day06.txt");

describe("day06", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5934);
    });

    it("input", () => {
      expect(part1(input)).to.equal(389726);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(26984457539);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1743335992042);
    });
  });
});
