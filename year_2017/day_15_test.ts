import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_15.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_15.txt");

const EXAMPLE = `Generator A starts with 65
Generator B starts with 8921`;

describe("day 15", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(588);
    });

    it("input", () => {
      expect(part1(input)).to.equal(626);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(309);
    });

    it("input", () => {
      expect(part2(input)).to.equal(306);
    });
  });
});
