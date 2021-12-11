import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_18.ts";

const EXAMPLE = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`;

const input = await Deno.readTextFile("year_2015/testdata/day_18.txt");

describe("day_18", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE, 4)).to.equal(4);
    });

    it("input", () => {
      expect(part1(input, 100)).to.equal(1061);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 5)).to.equal(17);
    });

    it("input", () => {
      expect(part2(input, 100)).to.equal(1006);
    });
  });
});
