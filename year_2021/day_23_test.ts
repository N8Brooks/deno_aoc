import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_23.ts";

const EXAMPLE = `#############
#...........#
###B#C#B#D###
  #A#D#C#A#
  #########`;

const input = await Deno.readTextFile("year_2021/testdata/day_23.txt");

describe("day 23", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(12521);
    });

    it("input", () => {
      expect(part1(input)).to.equal(11417);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(44169);
    });

    it("input", () => {
      expect(part2(input)).to.equal(49529);
    });
  });
});
