import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day10.ts";

const example = `XXXXXXX`;

const input = await Deno.readTextFile("year2021/testdata/day10.txt");

describe("day10", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(999);
    });

    it("input", () => {
      expect(part1(input)).to.equal(999);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(999);
    });

    it("input", () => {
      expect(part2(input)).to.equal(999);
    });
  });
});
