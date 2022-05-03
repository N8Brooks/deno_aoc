import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_24.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_24.txt");

const EXAMPLE = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`;

describe("day 24", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(31);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1940);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(19);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1928);
    });
  });
});
