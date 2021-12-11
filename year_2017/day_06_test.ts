import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_06.txt");

const EXAMPLE = "0\t2\t7\t0";

describe("day_06", () => {
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
