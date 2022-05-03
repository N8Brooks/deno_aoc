import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_11.ts";

const EXAMPLE = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

const input = await Deno.readTextFile("year_2021/testdata/day_11.txt");

describe("day 11", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(1656);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1757);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(195);
    });

    it("input", () => {
      expect(part2(input)).to.equal(422);
    });
  });
});
