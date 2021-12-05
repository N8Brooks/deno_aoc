import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day05.ts";

const input = await Deno.readTextFile("year2020/testdata/day05.txt");

describe("day05", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("FBFBBFFRLR")).to.equal(357);
    });

    it("example2", () => {
      expect(part1("BFFFBBFRRR")).to.equal(567);
    });

    it("example3", () => {
      expect(part1("FFFBBBFRRR")).to.equal(119);
    });

    it("example4", () => {
      expect(part1("BBFFBBFRLL")).to.equal(820);
    });

    it("input", () => {
      expect(part1(input)).to.equal(953);
    });
  });

  describe("part2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(615);
    });
  });
});
