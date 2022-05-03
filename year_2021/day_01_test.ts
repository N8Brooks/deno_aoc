import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const EXAMPLE = `199
200
208
210
200
207
240
269
260
263`;

const input = await Deno.readTextFile("year_2021/testdata/day_01.txt");

describe("day 1", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1557);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1608);
    });
  });
});
