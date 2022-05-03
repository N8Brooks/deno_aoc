import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_22.ts";

const EXAMPLE_1 = `Hit Points: 13
Damage: 8`;

const EXAMPLE_2 = `Hit Points: 14
Damage: 8`;

const input = await Deno.readTextFile("year_2015/testdata/day_22.txt");

describe("day_22", () => {
  describe("part1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1, 10, 250)).to.equal(226);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2, 10, 250)).to.equal(641);
    });

    it("input", () => {
      expect(part1(input, 50, 500)).to.equal(1269);
    });
  });

  describe("part2", () => {
    it("input", () => {
      expect(part2(input, 50, 500)).to.equal(1309);
    });
  });
});
