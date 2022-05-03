import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const EXAMPLE_1 = `5 1 9 5
7 5 3
2 4 6 8`;

const EXAMPLE_2 = `5 9 2 8
9 4 7 3
3 8 6 5`;

const input = await Deno.readTextFile("year_2017/testdata/day_02.txt");

describe("day 2", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(18);
    });

    it("input", () => {
      expect(part1(input)).to.equal(51833);
    });
  });

  describe("part 2", () => {
    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(9);
    });

    it("input", () => {
      expect(part2(input)).to.equal(288);
    });
  });
});
