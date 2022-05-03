import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_07.ts";

const EXAMPLE = `16,1,2,0,4,2,7,1,2,14`;

const input = await Deno.readTextFile("year_2021/testdata/day_07.txt");

describe("day 7", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(37);
    });

    it("input", () => {
      expect(part1(input)).to.equal(345035);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(168);
    });

    it("input", () => {
      expect(part2(input)).to.equal(97038163);
    });
  });
});
