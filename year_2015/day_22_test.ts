import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_22.ts";

const example = `Hit Points: 13
Damage: 8`;

const input = await Deno.readTextFile("year_2015/testdata/day_22.txt");

describe("day_22", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example, 10, 250)).to.equal(999);
    });

    it("input", () => {
      expect(part1(input, 50, 500)).to.equal(1269);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(999);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1309);
    });
  });
});
