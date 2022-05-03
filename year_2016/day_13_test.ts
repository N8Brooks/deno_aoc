import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_13.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_13.txt");

describe("day 13", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("10", [7, 4])).to.equal(11);
    });

    it("input", () => {
      expect(part1(input, [31, 39])).to.equal(90);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("10")).to.equal(151);
    });

    it("input", () => {
      expect(part2(input)).to.equal(135);
    });
  });
});
