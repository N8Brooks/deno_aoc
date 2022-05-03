import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_02.txt");

describe("day 2", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("2x3x4")).to.equal(58);
    });

    it("example 2", () => {
      expect(part1("1x1x10")).to.equal(43);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1606483);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("2x3x4")).to.equal(34);
    });

    it("example 2", () => {
      expect(part2("1x1x10")).to.equal(14);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3842356);
    });
  });
});
