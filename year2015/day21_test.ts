import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day21.ts";

const text = await Deno.readTextFile("year2015/testdata/day21.txt");

describe("day21", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("8 5 5", 12), 65);
    });

    it("input", () => {
      expect(part1(text, 100), 111);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("6 7 2", 8), 88);
    });

    it("input", () => {
      expect(part2(text, 100), 188);
    });
  });
});
