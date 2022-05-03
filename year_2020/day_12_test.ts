import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_12.ts";

const EXAMPLE = `F10
N3
F7
R90
F11`;

const input = await Deno.readTextFile("year_2020/testdata/day_12.txt");

describe("day 12", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(25);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2847);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(286);
    });

    it("input", () => {
      expect(part2(input)).to.equal(29839);
    });
  });
});
