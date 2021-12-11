import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day06.ts";

const input = await Deno.readTextFile("year2015/testdata/day06.txt");

describe("day06", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("turn on 0,0 through 999,999")).to.equal(1000000);
    });

    it("example2", () => {
      expect(part1("toggle 0,0 through 999,0")).to.equal(1000);
    });

    it("example3", () => {
      expect(part1("turn off 499,499 through 500,500")).to.equal(0);
    });

    it("example4", () => {
      expect(part1("turn on 0,0 through 0,0")).to.equal(1);
    });

    it("example5", () => {
      expect(part1("toggle 0,0 through 999,999")).to.equal(1000000);
    });

    it("input", () => {
      expect(part1(input)).to.equal(543903);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("turn on 0,0 through 999,999")).to.equal(1000000);
    });

    it("example2", () => {
      expect(part2("toggle 0,0 through 999,0")).to.equal(2000);
    });

    it("example3", () => {
      expect(part2("turn off 499,499 through 500,500")).to.equal(0);
    });

    it("example4", () => {
      expect(part2("turn on 0,0 through 0,0")).to.equal(1);
    });

    it("example5", () => {
      expect(part2("toggle 0,0 through 999,999")).to.equal(2000000);
    });

    it("input", () => {
      expect(part2(input)).to.equal(14687245);
    });
  });
});
