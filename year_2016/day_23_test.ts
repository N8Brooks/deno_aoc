import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_23.ts";

// const EXAMPLE = `cpy 2 a
// tgl a
// tgl a
// tgl a
// cpy 1 a
// dec a
// dec a`;

const input = await Deno.readTextFile("year_2016/testdata/day_23.txt");

describe("day 23", () => {
  describe("part 1", () => {
    // Optimization does not apply to example
    // it("example", () => {
    //   expect(part1(EXAMPLE)).to.equal(3);
    // });

    it("input", () => {
      expect(part1(input)).to.equal(11662);
    });
  });

  describe("part 2", () => {
    // Optimization does not apply to example
    // it("example", () => {
    //   expect(part2(EXAMPLE)).to.equal(3);
    // });

    it("input", () => {
      expect(part2(input)).to.equal(479008222);
    });
  });
});
