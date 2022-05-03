import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_15.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_15.txt");

const EXAMPLE =
  `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`;

describe("day 15", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(62842880);
    });

    it("input", () => {
      expect(part1(input)).to.equal(18965440);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(57600000);
    });

    it("input", () => {
      expect(part2(input)).to.equal(15862900);
    });
  });
});
