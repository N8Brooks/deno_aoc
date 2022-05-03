import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

const EXAMPLE = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

const input = await Deno.readTextFile("year_2018/testdata/day_03.txt");

describe("day 3", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE)).to.equal(4);
    });

    it("input", () => {
      expect(part1(input)).to.equal(121163);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input)).to.equal(943);
    });
  });
});
