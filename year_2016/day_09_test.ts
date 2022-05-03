import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_09.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_09.txt");

describe("day 9", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("ADVENT")).to.equal(6);
    });

    it("example 2", () => {
      expect(part1("A(1x5)BC")).to.equal(7);
    });

    it("example 3", () => {
      expect(part1("(3x3)XYZ")).to.equal(9);
    });

    it("example 4", () => {
      expect(part1("A(2x2)BCD(2x2)EFG")).to.equal(11);
    });

    it("example 5", () => {
      expect(part1("(6x1)(1x3)A")).to.equal(6);
    });

    it("example 6", () => {
      expect(part1("X(8x2)(3x3)ABCY")).to.equal(18);
    });

    it("input", () => {
      expect(part1(input)).to.equal(97714);
    });
  });

  describe("part 2", () => {
    it("example 3", () => {
      expect(part2("(3x3)XYZ")).to.equal(9);
    });

    it("example 6", () => {
      expect(part2("X(8x2)(3x3)ABCY")).to.equal(20);
    });

    it("example 7", () => {
      expect(part2("(27x12)(20x12)(13x14)(7x10)(1x12)A")).to.equal(241920);
    });

    it("example 8", () => {
      expect(part2("(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN"))
        .to.equal(445);
    });

    it("input", () => {
      expect(part2(input)).to.equal(10762972461);
    });
  });
});
