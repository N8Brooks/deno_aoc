import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_15.ts";

const input = await Deno.readTextFile("year_2020/testdata/day_15.txt");

describe("day 15", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("0,3,6")).to.equal(436);
    });

    it("example 2", () => {
      expect(part1("1,3,2")).to.equal(1);
    });

    it("example 3", () => {
      expect(part1("2,1,3")).to.equal(10);
    });

    it("example 4", () => {
      expect(part1("1,2,3")).to.equal(27);
    });

    it("example 5", () => {
      expect(part1("2,3,1")).to.equal(78);
    });

    it("example 6", () => {
      expect(part1("3,2,1")).to.equal(438);
    });

    it("example 7", () => {
      expect(part1("3,1,2")).to.equal(1836);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1111);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("0,3,6")).to.equal(175594);
    });

    it("example 2", () => {
      expect(part2("1,3,2")).to.equal(2578);
    });

    it("example 3", () => {
      expect(part2("2,1,3")).to.equal(3544142);
    });

    it("example 4", () => {
      expect(part2("1,2,3")).to.equal(261214);
    });

    it("example 5", () => {
      expect(part2("2,3,1")).to.equal(6895259);
    });

    it("example 6", () => {
      expect(part2("3,2,1")).to.equal(18);
    });

    it("example 7", () => {
      expect(part2("3,1,2")).to.equal(362);
    });

    it("input", () => {
      expect(part2(input)).to.equal(48568);
    });
  });
});
