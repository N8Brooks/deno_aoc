import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_02.txt");

describe("day 2", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(3760627);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(7195);
    });
  });
});
