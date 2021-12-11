import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day24.ts";

const EXAMPLE = "1 2 3 4 5 7 8 9 10 11";

const input = await Deno.readTextFile("year2015/testdata/day24.txt");

describe("day24", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(99);
    });

    it("input", () => {
      expect(part1(input)).to.equal(10439961859);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(44);
    });

    it("input", () => {
      expect(part2(input)).to.equal(72050269);
    });
  });
});