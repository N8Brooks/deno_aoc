import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_08.ts";

const EXAMPLE = `rect 3x2
rotate column x=1 by 1
rotate row y=0 by 4
rotate column x=1 by 1`;

const input = await Deno.readTextFile("year_2016/testdata/day_08.txt");

describe("day 8", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(6);
    });

    it("input", () => {
      expect(part1(input)).to.equal(121);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("");
    });

    it("input", () => {
      expect(part2(input)).to.equal("RURUCEOEIL");
    });
  });
});
