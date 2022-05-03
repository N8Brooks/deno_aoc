import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_20.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_20.txt");

describe("day 20", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("70")).to.equal(4);
    });

    it("input", () => {
      expect(part1(input)).to.equal(776160);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("70")).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(786240);
    });
  });
});
