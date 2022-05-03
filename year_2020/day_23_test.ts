import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_23.ts";

const EXAMPLE = "389125467";

const input = await Deno.readTextFile("year_2020/testdata/day_23.txt");

describe("day 23", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(67384529);
    });

    it("input", () => {
      expect(part1(input)).to.equal(32897654);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(149245887792);
    });

    it("input", () => {
      expect(part2(input)).to.equal(186715244496);
    });
  });
});
