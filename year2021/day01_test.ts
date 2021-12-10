import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day01.ts";

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

const input = await Deno.readTextFile("year2021/testdata/day01.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1557);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1608);
    });
  });
});
