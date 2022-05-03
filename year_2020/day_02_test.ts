import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const EXAMPLE = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const input = await Deno.readTextFile("year_2020/testdata/day_02.txt");

describe("day 2", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(2);
    });

    it("input", () => {
      expect(part1(input)).to.equal(591);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(335);
    });
  });
});
