import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const EXAMPLE = "dabAcCaCBAcCcaDA";

const input = await Deno.readTextFile("year_2018/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE)).to.equal(10);
    });

    it("input", () => {
      expect(part1(input)).to.equal(10886);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(4);
    });

    it("input", () => {
      expect(part2(input)).to.equal(4684);
    });
  });
});
