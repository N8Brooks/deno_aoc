import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_10.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_10.txt");

describe("day 10", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("3,4,1,5", 5)).to.equal(12);
    });

    it("input", () => {
      expect(part1(input)).to.equal(4480);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("")).to.equal("a2582a3a0e66e6e86e3812dcb672a272");
    });

    it("example 2", () => {
      expect(part2("AoC 2017")).to.equal("33efeb34ea91902bb2f59c9920caa6cd");
    });

    it("example 3", () => {
      expect(part2("1,2,3")).to.equal("3efbe78a8d82f29979031a4aa0b16a9d");
    });

    it("example 4", () => {
      expect(part2("1,2,4")).to.equal("63960835bcdc130f0b66d7ff4f6a5a8e");
    });

    it("input", () => {
      expect(part2(input)).to.equal("c500ffe015c83b60fad2e4b7d59dabc4");
    });
  });
});
