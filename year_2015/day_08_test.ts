import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day08.ts";

const input = await Deno.readTextFile("year2015/testdata/day08.txt");

describe("day08", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1('""')).to.equal(2);
    });

    it("example2", () => {
      expect(part1('"abc"')).to.equal(2);
    });

    it("example3", () => {
      expect(part1('"aaa\\"aaa"')).to.equal(3);
    });

    it("example4", () => {
      expect(part1('"\\x27"')).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1333);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2('""')).to.equal(4);
    });

    it("example2", () => {
      expect(part2('"abc"')).to.equal(4);
    });

    it("example3", () => {
      expect(part2('"aaa\\"aaa"')).to.equal(6);
    });

    it("example4", () => {
      expect(part2('"\\x27"')).to.equal(5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2046);
    });
  });
});
