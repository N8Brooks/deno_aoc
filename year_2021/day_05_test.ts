import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const EXAMPLE = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const input = await Deno.readTextFile("year_2021/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(5167);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(12);
    });

    it("input", () => {
      expect(part2(input)).to.equal(17604);
    });
  });
});
