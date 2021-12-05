import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day03.ts";

const example = `..##.......
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

const data = await Deno.readTextFile("year2020/testdata/day03.txt");

describe("day03", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(7);
    });

    it("data", () => {
      expect(part1(data)).to.equal(207);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(336);
    });

    it("data", () => {
      expect(part2(data)).to.equal(2655892800);
    });
  });
});
