import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day11.ts";

const data = await Deno.readTextFile("year2015/day11_data.txt");

describe("day11", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("abcdefgh")).to.equal("abcdffaa");
    });

    it("data", () => {
      expect(part1(data)).to.equal("hxbxxyzz");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("abcdefgh")).to.equal("abcdffbb");
    });

    it("data", () => {
      expect(part2(data)).to.equal("hxcaabcc");
    });
  });
});
