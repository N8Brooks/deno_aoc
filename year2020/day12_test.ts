import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day12.ts";

const example = `F10
N3
F7
R90
F11`;

const data = await Deno.readTextFile("year2020/testdata/day12.txt");

describe("day12", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(25);
    });

    it("data", () => {
      expect(part1(data)).to.equal(2847);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(286);
    });

    it("data", () => {
      expect(part2(data)).to.equal(29839);
    });
  });
});
