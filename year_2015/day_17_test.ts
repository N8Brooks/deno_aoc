import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_17.ts";

const EXAMPLE = `20
15
10
5
5`;

const input = await Deno.readTextFile("year_2015/testdata/day_17.txt");

describe("day 17", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE, 25)).to.equal(4);
    });

    it("input", () => {
      expect(part1(input, 150)).to.equal(654);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 25)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input, 150)).to.equal(57);
    });
  });
});
