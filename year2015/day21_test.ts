import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day21.ts";

const text = await Deno.readTextFile("year2015/day21_data.txt");

describe("day21", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("8 5 5", 12), 65);
    });

    it("data", () => {
      expect(part1(text, 100), 111);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("6 7 2", 8), 88);
    });

    it("data", () => {
      expect(part2(text, 100), 188);
    });
  });
});
