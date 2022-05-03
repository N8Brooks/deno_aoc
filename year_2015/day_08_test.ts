import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_08.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_08.txt");

describe("day 8", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1('""')).to.equal(2);
    });

    it("example 2", () => {
      expect(part1('"abc"')).to.equal(2);
    });

    it("example 3", () => {
      expect(part1('"aaa\\"aaa"')).to.equal(3);
    });

    it("example 4", () => {
      expect(part1('"\\x27"')).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1333);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2('""')).to.equal(4);
    });

    it("example 2", () => {
      expect(part2('"abc"')).to.equal(4);
    });

    it("example 3", () => {
      expect(part2('"aaa\\"aaa"')).to.equal(6);
    });

    it("example 4", () => {
      expect(part2('"\\x27"')).to.equal(5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2046);
    });
  });
});
