import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day01.ts";

const example = `199
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
      expect(part1(example)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1557);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1608);
    });
  });
});
