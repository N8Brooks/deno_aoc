import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const EXAMPLE = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;

const input = await Deno.readTextFile("year_2018/testdata/day_06.txt");

describe("day 6", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE)).to.equal(17);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3293);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 32)).to.equal(16);
    });

    it("input", () => {
      expect(part2(input, 10_000)).to.equal(45176);
    });
  });
});
