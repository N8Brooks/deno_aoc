import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day05.ts";

const input = await Deno.readTextFile("year2016/testdata/day05.txt");

describe("day05", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("abc")).to.equal("18f47a30");
    });

    it("input", () => {
      expect(part1(input)).to.equal("c6697b55");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("abc")).to.equal("05ace8e3");
    });

    it("input", () => {
      expect(part2(input)).to.equal("8c35d1ab");
    });
  });
});
