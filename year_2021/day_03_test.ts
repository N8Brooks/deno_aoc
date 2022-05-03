import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

const EXAMPLE = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

const input = await Deno.readTextFile("year_2021/testdata/day_03.txt");

describe("day 3", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(198);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3242606);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(230);
    });

    it("input", () => {
      expect(part2(input)).to.equal(4856080);
    });
  });
});
