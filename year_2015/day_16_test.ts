import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_16.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_16.txt");

describe("day 16", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(213);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(323);
    });
  });
});
