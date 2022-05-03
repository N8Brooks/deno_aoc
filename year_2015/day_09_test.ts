import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_09.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_09.txt");

const EXAMPLE = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;

describe("day 9", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(605);
    });

    it("input", () => {
      expect(part1(input)).to.equal(117);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(982);
    });

    it("input", () => {
      expect(part2(input)).to.equal(909);
    });
  });
});
