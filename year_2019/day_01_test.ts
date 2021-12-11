import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_01.txt");

describe("day_01", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("12")).to.equal(2);
    });

    it("example2", () => {
      expect(part1("14")).to.equal(2);
    });

    it("example3", () => {
      expect(part1("1969")).to.equal(654);
    });

    it("example4", () => {
      expect(part1("100756")).to.equal(33583);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3408471);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("12")).to.equal(2);
    });

    it("example2", () => {
      expect(part2("14")).to.equal(2);
    });

    it("example3", () => {
      expect(part2("1969")).to.equal(966);
    });

    it("example4", () => {
      expect(part2("100756")).to.equal(50346);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5109803);
    });
  });
});
