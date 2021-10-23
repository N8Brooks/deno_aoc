import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day16.ts";

const data = await Deno.readTextFile("year2015/day16_data.txt");

describe("day16", () => {
  describe("part1", () => {
    it("data", () => {
      expect(part1(data)).to.equal(213);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(323);
    });
  });
});
