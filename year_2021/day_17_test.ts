import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_17.ts";

const EXAMPLE = `target area: x=20..30, y=-10..-5`;

const input = await Deno.readTextFile("year_2021/testdata/day_17.txt");

describe("day 17", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(45);
    });

    it("input", () => {
      expect(part1(input)).to.equal(19503);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(112);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5200);
    });
  });
});
