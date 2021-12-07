import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day15.ts";

const input = await Deno.readTextFile("year2020/testdata/day15.txt");

describe("day15", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("0,3,6")).to.equal(436);
    });

    it("example2", () => {
      expect(part1("1,3,2")).to.equal(1);
    });

    it("example3", () => {
      expect(part1("2,1,3")).to.equal(10);
    });

    it("example4", () => {
      expect(part1("1,2,3")).to.equal(27);
    });

    it("example5", () => {
      expect(part1("2,3,1")).to.equal(78);
    });

    it("example6", () => {
      expect(part1("3,2,1")).to.equal(438);
    });

    it("example7", () => {
      expect(part1("3,1,2")).to.equal(1836);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1111);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("0,3,6")).to.equal(175594);
    });

    it("example2", () => {
      expect(part2("1,3,2")).to.equal(2578);
    });

    it("example3", () => {
      expect(part2("2,1,3")).to.equal(3544142);
    });

    it("example4", () => {
      expect(part2("1,2,3")).to.equal(261214);
    });

    it("example5", () => {
      expect(part2("2,3,1")).to.equal(6895259);
    });

    it("example6", () => {
      expect(part2("3,2,1")).to.equal(18);
    });

    it("example7", () => {
      expect(part2("3,1,2")).to.equal(362);
    });

    it("input", () => {
      expect(part2(input)).to.equal(48568);
    });
  });
});
