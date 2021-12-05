import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2017/testdata/day05.txt");

const example = `0
3
0
1
-3`;

describe("day05", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example)).to.equal(5);
    });

    it("data", () => {
      expect(part1(data)).to.equal(325922);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(10);
    });

    it("data", () => {
      expect(part2(data)).to.equal(24490906);
    });
  });
});
