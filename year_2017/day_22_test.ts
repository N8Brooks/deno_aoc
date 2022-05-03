import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_22.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_22.txt");

const EXAMPLE = `..#
#..
...`;

describe("day 22", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5587);
    });

    it("input", () => {
      expect(part1(input)).to.equal(5538);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(2511944);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2511090);
    });
  });
});
