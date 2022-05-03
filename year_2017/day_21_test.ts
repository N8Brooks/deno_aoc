import { describe, expect, it } from "../test_deps.ts";
import { part1, part2, sumOnPixels } from "./day_21.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_21.txt");

const EXAMPLE = `../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#`;

describe("day 21", () => {
  describe("sum on pixels", () => {
    it("example", () => {
      expect(sumOnPixels(EXAMPLE, 2)).to.equal(12);
    });
  });

  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(194);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(2536879);
    });
  });
});
