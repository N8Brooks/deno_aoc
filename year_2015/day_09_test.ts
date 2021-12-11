import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day09.ts";

const input = await Deno.readTextFile("year2015/testdata/day09.txt");

const EXAMPLE = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;

describe("day09", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(605);
    });

    it("input", () => {
      expect(part1(input)).to.equal(117);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(982);
    });

    it("input", () => {
      expect(part2(input)).to.equal(909);
    });
  });
});