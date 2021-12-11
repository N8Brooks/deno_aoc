import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day02.ts";

const input = await Deno.readTextFile("year2015/testdata/day02.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("2x3x4")).to.equal(58);
    });

    it("example2", () => {
      expect(part1("1x1x10")).to.equal(43);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1606483);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("2x3x4")).to.equal(34);
    });

    it("example2", () => {
      expect(part2("1x1x10")).to.equal(14);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3842356);
    });
  });
});
