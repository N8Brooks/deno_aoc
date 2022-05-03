import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_12.ts";

const EXAMPLE = `cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`;

const input = await Deno.readTextFile("year_2016/testdata/day_12.txt");

describe("day 12", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(42);
    });

    it("input", () => {
      expect(part1(input)).to.equal(318009);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(42);
    });

    it("input", () => {
      expect(part2(input)).to.equal(9227663);
    });
  });
});
