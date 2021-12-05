import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day08.ts";

const input = await Deno.readTextFile("year2015/testdata/day08.txt");

describe("day08", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1('""'), 2);
    });

    it("example2", () => {
      expect(part1('"abc"'), 2);
    });

    it("example3", () => {
      expect(part1('"aaa\\"aaa"'), 3);
    });

    it("example4", () => {
      expect(part1('"\\x27"'), 5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1333);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2('""'), 4);
    });

    it("example2", () => {
      expect(part2('"abc"'), 4);
    });

    it("example3", () => {
      expect(part2('"aaa\\"aaa"'), 6);
    });

    it("example4", () => {
      expect(part2('"\\x27"'), 5);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2046);
    });
  });
});
