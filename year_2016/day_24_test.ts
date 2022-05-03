import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_24.ts";

const EXAMPLE = `###########
#0.1.....2#
#.#######.#
#4.......3#
###########`;

const input = await Deno.readTextFile("year_2016/testdata/day_24.txt");

describe("day 24", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(14);
    });

    it("input", () => {
      expect(part1(input)).to.equal(498);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(20);
    });

    it("input", () => {
      expect(part2(input)).to.equal(804);
    });
  });
});
