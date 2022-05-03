import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_14.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_14.txt");

const EXAMPLE = "flqrgnkx";

describe("day 14", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(8108);
    });

    it("input", () => {
      expect(part1(input)).to.equal(8106);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(1242);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1164);
    });
  });
});
