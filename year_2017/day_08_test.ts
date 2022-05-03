import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_08.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_08.txt");

const EXAMPLE = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

describe("day 8", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(1);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3880);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(10);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5035);
    });
  });
});
