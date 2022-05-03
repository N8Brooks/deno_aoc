import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_04.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_04.txt");

describe("day 4", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("aa bb cc dd ee")).to.equal(1);
    });

    it("example 2", () => {
      expect(part1("aa bb cc dd aa")).to.equal(0);
    });

    it("example 3", () => {
      expect(part1("aa bb cc dd aaa")).to.equal(1);
    });

    it("input", () => {
      expect(part1(input)).to.equal(325);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("abcde fghij")).to.equal(1);
    });

    it("example 2", () => {
      expect(part2("abcde xyz ecdab")).to.equal(0);
    });

    it("example 3", () => {
      expect(part2("a ab abc abd abf abj")).to.equal(1);
    });

    it("example 4", () => {
      expect(part2("iiii oiii ooii oooi oooo")).to.equal(1);
    });

    it("example 5", () => {
      expect(part2("oiii ioii iioi iiio")).to.equal(0);
    });

    it("input", () => {
      expect(part2(input)).to.equal(119);
    });
  });
});
