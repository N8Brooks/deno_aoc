import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day01.ts";

const example = `1721
979
366
299
675
1456`;

const data = await Deno.readTextFile("year2020/testdata/day01.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(514579);
    });

    it("data", () => {
      expect(part1(data)).to.equal(482811);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(241861950);
    });

    it("data", () => {
      expect(part2(data)).to.equal(193171814);
    });
  });
});
