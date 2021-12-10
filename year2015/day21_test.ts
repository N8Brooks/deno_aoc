import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day21.ts";

const input = await Deno.readTextFile("year2015/testdata/day21.txt");

describe("day21", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("8 5 5", 12)).to.equal(65);
    });

    it("input", () => {
      expect(part1(input, 100)).to.equal(111);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("6 7 2", 8)).to.equal(88);
    });

    it("input", () => {
      expect(part2(input, 100)).to.equal(188);
    });
  });
});
