import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_11.ts";

const EXAMPLE = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const input = await Deno.readTextFile("year_2020/testdata/day_11.txt");

describe("day 11", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(37);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2178);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(26);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1978);
    });
  });
});
