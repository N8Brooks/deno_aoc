import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day12.ts";

const example = `F10
N3
F7
R90
F11`;

const input = await Deno.readTextFile("year2020/testdata/day12.txt");

describe("day12", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(25);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2847);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(286);
    });

    it("input", () => {
      expect(part2(input)).to.equal(29839);
    });
  });
});
