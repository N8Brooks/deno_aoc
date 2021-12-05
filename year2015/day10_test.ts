import { expect } from "../test/setup.ts";
import { lookSay, part1, part2 } from "./day10.ts";

const data = await Deno.readTextFile("year2015/testdata/day10.txt");

describe("day10", () => {
  describe("lookSay", () => {
    it("example1", () => {
      expect(lookSay("1").join("")).to.equal("11");
    });

    it("example2", () => {
      expect(lookSay("11").join("")).to.equal("21");
    });

    it("example3", () => {
      expect(lookSay("21").join("")).to.equal("1211");
    });

    it("example4", () => {
      expect(lookSay("1211").join("")).to.equal("111221");
    });

    it("example5", () => {
      expect(lookSay("111221").join("")).to.equal("312211");
    });
  });

  describe("part1", () => {
    it("data", () => {
      expect(part1(data)).to.equal(252594);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(3579328);
    });
  });
});
