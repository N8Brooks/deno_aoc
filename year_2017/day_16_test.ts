import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_16.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_16.txt");

const EXAMPLE = "s1,x3/4,pe/b";

describe("day 16", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE, 5)).to.equal("baedc");
    });

    it("input", () => {
      expect(part1(input)).to.equal("fnloekigdmpajchb");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 5)).to.equal("abcde");
    });

    it("input", () => {
      expect(part2(input)).to.equal("amkjepdhifolgncb");
    });
  });
});
