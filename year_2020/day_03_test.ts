import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

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

const input = await Deno.readTextFile("year_2020/testdata/day_03.txt");

describe("day 3", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(207);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(336);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2655892800);
    });
  });
});
