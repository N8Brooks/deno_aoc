import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_23.ts";

const example = `inc a
jio a, +2
tpl a
inc a`;

const input = await Deno.readTextFile("year_2015/testdata/day_23.txt");

describe("day 23", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(example, "a")).to.equal(2);
    });

    it("input", () => {
      expect(part1(input, "b")).to.equal(307);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(example, "a")).to.equal(7);
    });

    it("input", () => {
      expect(part2(input, "b")).to.equal(160);
    });
  });
});
