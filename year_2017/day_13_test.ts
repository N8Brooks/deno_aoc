import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_13.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_13.txt");

const EXAMPLE = `0: 3
1: 2
4: 4
6: 4`;

describe("day 13", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(24);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2604);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(10);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3941460);
    });
  });
});
