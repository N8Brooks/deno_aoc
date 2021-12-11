import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const EXAMPLE = `1721
979
366
299
675
1456`;

const input = await Deno.readTextFile("year_2020/testdata/day_01.txt");

describe("day_01", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(514579);
    });

    it("input", () => {
      expect(part1(input)).to.equal(482811);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(241861950);
    });

    it("input", () => {
      expect(part2(input)).to.equal(193171814);
    });
  });
});
