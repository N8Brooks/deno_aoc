import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day11.ts";

const input = await Deno.readTextFile("year2015/testdata/day11.txt");

describe("day11", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("abcdefgh")).to.equal("abcdffaa");
    });

    it("input", () => {
      expect(part1(input)).to.equal("hxbxxyzz");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("abcdefgh")).to.equal("abcdffbb");
    });

    it("input", () => {
      expect(part2(input)).to.equal("hxcaabcc");
    });
  });
});
