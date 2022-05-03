import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_24.ts";

const input = await Deno.readTextFile("year_2021/testdata/day_24.txt");

describe("day 24", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(99394899891971);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(92171126131911);
    });
  });
});
