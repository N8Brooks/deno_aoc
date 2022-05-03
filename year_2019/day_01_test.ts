import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_01.txt");

describe("day 1", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("12")).to.equal(2);
    });

    it("example 2", () => {
      expect(part1("14")).to.equal(2);
    });

    it("example 3", () => {
      expect(part1("1969")).to.equal(654);
    });

    it("example 4", () => {
      expect(part1("100756")).to.equal(33583);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3408471);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("12")).to.equal(2);
    });

    it("example 2", () => {
      expect(part2("14")).to.equal(2);
    });

    it("example 3", () => {
      expect(part2("1969")).to.equal(966);
    });

    it("example 4", () => {
      expect(part2("100756")).to.equal(50346);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5109803);
    });
  });
});
