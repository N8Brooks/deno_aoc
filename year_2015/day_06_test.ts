import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_06.txt");

describe("day 6", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("turn on 0,0 through 999,999")).to.equal(1000000);
    });

    it("example 2", () => {
      expect(part1("toggle 0,0 through 999,0")).to.equal(1000);
    });

    it("example 3", () => {
      expect(part1("turn off 499,499 through 500,500")).to.equal(0);
    });

    it("example 4", () => {
      expect(part1("turn on 0,0 through 0,0")).to.equal(1);
    });

    it("example 5", () => {
      expect(part1("toggle 0,0 through 999,999")).to.equal(1000000);
    });

    it("input", () => {
      expect(part1(input)).to.equal(543903);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("turn on 0,0 through 999,999")).to.equal(1000000);
    });

    it("example 2", () => {
      expect(part2("toggle 0,0 through 999,0")).to.equal(2000);
    });

    it("example 3", () => {
      expect(part2("turn off 499,499 through 500,500")).to.equal(0);
    });

    it("example 4", () => {
      expect(part2("turn on 0,0 through 0,0")).to.equal(1);
    });

    it("example 5", () => {
      expect(part2("toggle 0,0 through 999,999")).to.equal(2000000);
    });

    it("input", () => {
      expect(part2(input)).to.equal(14687245);
    });
  });
});
