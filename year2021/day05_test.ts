import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day05.ts";

const example = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const input = await Deno.readTextFile("year2021/testdata/day05.txt");

describe("day05", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(5167);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(12);
    });

    it("input", () => {
      expect(part2(input)).to.equal(17604);
    });
  });
});
