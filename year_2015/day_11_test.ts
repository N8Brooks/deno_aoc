import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_11.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_11.txt");

describe("day 11", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("abcdefgh")).to.equal("abcdffaa");
    });

    it("input", () => {
      expect(part1(input)).to.equal("hxbxxyzz");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("abcdefgh")).to.equal("abcdffbb");
    });

    it("input", () => {
      expect(part2(input)).to.equal("hxcaabcc");
    });
  });
});
