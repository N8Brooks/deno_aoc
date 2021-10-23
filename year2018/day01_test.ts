import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2018/day01_data.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("+1 -2 +3 +1")).to.equal(3);
    });

    it("example2", () => {
      expect(part1("+1 +1 +1")).to.equal(3);
    });

    it("example3", () => {
      expect(part1("+1 +1 -2")).to.equal(0);
    });

    it("example4", () => {
      expect(part1("-1 -2 -3")).to.equal(-6);
    });

    it("data", () => {
      expect(part1(data)).to.equal(599);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("+1 -2 +3 +1")).to.equal(2);
    });

    it("example2", () => {
      expect(part2("+1 -1")).to.equal(0);
    });

    it("example3", () => {
      expect(part2("+3 +3 +4 -2 -4")).to.equal(10);
    });

    it("example4", () => {
      expect(part2("-6 +3 +8 +5 -6")).to.equal(5);
    });

    it("example5", () => {
      expect(part2("+7 +7 -2 -7 -4")).to.equal(14);
    });

    it("data", () => {
      expect(part2(data)).to.equal(81204);
    });
  });
});
