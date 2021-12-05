import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2016/testdata/day02.txt");

const example = `ULL
RRDDD
LURDL
UUUUD`;

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal("1985");
    });

    it("data", () => {
      expect(part1(data)).to.equal("24862");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal("5DB3");
    });

    it("data", () => {
      expect(part2(data)).to.equal("46C91");
    });
  });
});
