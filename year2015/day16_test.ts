import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day16.ts";

const input = await Deno.readTextFile("year2015/testdata/day16.txt");

describe("day16", () => {
  describe("part1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(213);
    });
  });

  describe("part2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(323);
    });
  });
});
