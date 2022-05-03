import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_02.txt");

const EXAMPLE = `ULL
RRDDD
LURDL
UUUUD`;

describe("day 2", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal("1985");
    });

    it("input", () => {
      expect(part1(input)).to.equal("24862");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("5DB3");
    });

    it("input", () => {
      expect(part2(input)).to.equal("46C91");
    });
  });
});
