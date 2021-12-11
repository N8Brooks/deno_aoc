import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day03.ts";

const EXAMPLE = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const input = await Deno.readTextFile("year2020/testdata/day03.txt");

describe("day03", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(207);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(336);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2655892800);
    });
  });
});
