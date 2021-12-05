import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day20.ts";

const input = await Deno.readTextFile("year2015/testdata/day20.txt");

describe("day20", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("70")).to.equal(4);
    });

    it("input", () => {
      expect(part1(input)).to.equal(776160);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("70")).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(786240);
    });
  });
});
