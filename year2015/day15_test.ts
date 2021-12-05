import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day15.ts";

const input = await Deno.readTextFile("year2015/testdata/day15.txt");

const example =
  `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`;

describe("day15", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(62842880);
    });

    it("input", () => {
      expect(part1(input)).to.equal(18965440);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(57600000);
    });

    it("input", () => {
      expect(part2(input)).to.equal(15862900);
    });
  });
});
