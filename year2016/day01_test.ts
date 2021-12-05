import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2016/testdata/day01.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("R2, L3")).to.equal(5);
    });

    it("example2", () => {
      expect(part1("R2, R2, R2")).to.equal(2);
    });

    it("example3", () => {
      expect(part1("R5, L5, R5, R3")).to.equal(12);
    });

    it("example4", () => {
      expect(part1("R8, R4, R4, R8")).to.equal(8);
    });

    it("data", () => {
      expect(part1(data)).to.equal(161);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("R2, L3")).to.equal(5);
    });

    it("example2", () => {
      expect(part2("R2, R2, R2")).to.equal(2);
    });

    it("example3", () => {
      expect(part2("R5, L5, R5, R3")).to.equal(12);
    });

    it("example4", () => {
      expect(part2("R8, R4, R4, R8")).to.equal(4);
    });

    it("data", () => {
      expect(part2(data)).to.equal(110);
    });
  });
});
