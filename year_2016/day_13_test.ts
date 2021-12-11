import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day13.ts";

const input = await Deno.readTextFile("year2016/testdata/day13.txt");

describe("day13", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("10", [7, 4])).to.equal(11);
    });

    it("input", () => {
      expect(part1(input, [31, 39])).to.equal(90);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("10")).to.equal(151);
    });

    it("input", () => {
      expect(part2(input)).to.equal(135);
    });
  });
});
