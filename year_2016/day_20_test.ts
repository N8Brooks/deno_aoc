import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_20.ts";

const EXAMPLE = `5-8
0-2
4-7`;

const input = await Deno.readTextFile("year_2016/testdata/day_20.txt");

describe("day 20", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(31053880);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 9)).to.equal(2);
    });

    it("input", () => {
      expect(part2(input, 4_294_967_295)).to.equal(117);
    });
  });
});
