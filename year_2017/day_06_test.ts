import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day06.ts";

const input = await Deno.readTextFile("year2017/testdata/day06.txt");

const EXAMPLE = "0\t2\t7\t0";

describe("day06", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(12841);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(4);
    });

    it("input", () => {
      expect(part2(input)).to.equal(8038);
    });
  });
});