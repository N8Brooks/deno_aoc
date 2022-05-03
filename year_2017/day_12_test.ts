import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_12.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_12.txt");

const EXAMPLE = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`;

describe("day 12", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(6);
    });

    it("input", () => {
      expect(part1(input)).to.equal(306);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(2);
    });

    it("input", () => {
      expect(part2(input)).to.equal(200);
    });
  });
});
