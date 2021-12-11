import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_01.txt");

describe("day_01", () => {
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

    it("input", () => {
      expect(part1(input)).to.equal(161);
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

    it("input", () => {
      expect(part2(input)).to.equal(110);
    });
  });
});
