import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_13.ts";

const EXAMPLE = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;

const input = await Deno.readTextFile("year_2021/testdata/day_13.txt");

describe("day 13", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(17);
    });

    it("input", () => {
      expect(part1(input)).to.equal(759);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("O");
    });

    it("input", () => {
      expect(part2(input)).to.equal("HECRZKPR");
    });
  });
});
