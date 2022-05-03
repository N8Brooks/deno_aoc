import { describe, expect, it } from "../test_deps.ts";
import { lookSay, part1, part2 } from "./day_10.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_10.txt");

describe("day 10", () => {
  describe("lookSay", () => {
    it("example 1", () => {
      expect(lookSay("1").join("")).to.equal("11");
    });

    it("example 2", () => {
      expect(lookSay("11").join("")).to.equal("21");
    });

    it("example 3", () => {
      expect(lookSay("21").join("")).to.equal("1211");
    });

    it("example 4", () => {
      expect(lookSay("1211").join("")).to.equal("111221");
    });

    it("example 5", () => {
      expect(lookSay("111221").join("")).to.equal("312211");
    });
  });

  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(252594);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(3579328);
    });
  });
});
