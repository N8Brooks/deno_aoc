import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_15.ts";

const EXAMPLE = `Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.`;

const input = await Deno.readTextFile("year_2016/testdata/day_15.txt");

describe("day 15", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(376777);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(85);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3903937);
    });
  });
});
