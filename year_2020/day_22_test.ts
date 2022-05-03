import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_22.ts";

const EXAMPLE = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

const input = await Deno.readTextFile("year_2020/testdata/day_22.txt");

describe("day 22", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(306);
    });

    it("input", () => {
      expect(part1(input)).to.equal(32783);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(291);
    });

    it("input", () => {
      expect(part2(input)).to.equal(33455);
    });
  });
});
