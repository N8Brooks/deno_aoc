import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day11.ts";

const example = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const input = await Deno.readTextFile("year2020/testdata/day11.txt");

describe("day11", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(37);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2178);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(26);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1978);
    });
  });
});
