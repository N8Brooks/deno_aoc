import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_23.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_23.txt");

describe("day 23", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(3025);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(915);
    });
  });
});
