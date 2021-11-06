import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day04.ts";

const data = await Deno.readTextFile("year2017/day04_data.txt");

describe("day04", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("aa bb cc dd ee")).to.equal(1);
    });

    it("example2", () => {
      expect(part1("aa bb cc dd aa")).to.equal(0);
    });

    it("example3", () => {
      expect(part1("aa bb cc dd aaa")).to.equal(1);
    });

    it("data", () => {
      expect(part1(data)).to.equal(325);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("abcde fghij")).to.equal(1);
    });

    it("example2", () => {
      expect(part2("abcde xyz ecdab")).to.equal(0);
    });

    it("example3", () => {
      expect(part2("a ab abc abd abf abj")).to.equal(1);
    });

    it("example4", () => {
      expect(part2("iiii oiii ooii oooi oooo")).to.equal(1);
    });

    it("example5", () => {
      expect(part2("oiii ioii iioi iiio")).to.equal(0);
    });

    it("data", () => {
      expect(part2(data)).to.equal(119);
    });
  });
});
