import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_21.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_21.txt");

describe("day 21", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("8 5 5", 12)).to.equal(65);
    });

    it("input", () => {
      expect(part1(input, 100)).to.equal(111);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("6 7 2", 8)).to.equal(88);
    });

    it("input", () => {
      expect(part2(input, 100)).to.equal(188);
    });
  });
});
