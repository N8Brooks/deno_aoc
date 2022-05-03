import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const input = await Deno.readTextFile("year_2018/testdata/day_01.txt");

describe("day 1", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("+1 -2 +3 +1")).to.equal(3);
    });

    it("example 2", () => {
      expect(part1("+1 +1 +1")).to.equal(3);
    });

    it("example 3", () => {
      expect(part1("+1 +1 -2")).to.equal(0);
    });

    it("example 4", () => {
      expect(part1("-1 -2 -3")).to.equal(-6);
    });

    it("input", () => {
      expect(part1(input)).to.equal(599);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("+1 -2 +3 +1")).to.equal(2);
    });

    it("example 2", () => {
      expect(part2("+1 -1")).to.equal(0);
    });

    it("example 3", () => {
      expect(part2("+3 +3 +4 -2 -4")).to.equal(10);
    });

    it("example 4", () => {
      expect(part2("-6 +3 +8 +5 -6")).to.equal(5);
    });

    it("example 5", () => {
      expect(part2("+7 +7 -2 -7 -4")).to.equal(14);
    });

    it("input", () => {
      expect(part2(input)).to.equal(81204);
    });
  });
});
