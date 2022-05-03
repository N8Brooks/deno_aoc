import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_16.ts";

const EXAMPLE_1 = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`;

const EXAMPLE_2 = `class: 0-1 or 4-19
row: 0-5 or 8-19
seat: 0-13 or 16-19

your ticket:
11,12,13

nearby tickets:
3,9,18
15,1,5
5,14,9`;

const input = await Deno.readTextFile("year_2020/testdata/day_16.txt");

describe("day 16", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE_1)).to.equal(71);
    });

    it("input", () => {
      expect(part1(input)).to.equal(32842);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE_2)).to.equal(1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2628667251989);
    });
  });
});
