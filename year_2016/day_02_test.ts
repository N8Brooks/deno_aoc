import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day02.ts";

const input = await Deno.readTextFile("year2016/testdata/day02.txt");

const EXAMPLE = `ULL
RRDDD
LURDL
UUUUD`;

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal("1985");
    });

    it("input", () => {
      expect(part1(input)).to.equal("24862");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("5DB3");
    });

    it("input", () => {
      expect(part2(input)).to.equal("46C91");
    });
  });
});