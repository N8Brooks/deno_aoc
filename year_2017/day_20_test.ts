import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_20.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_20.txt");

const EXAMPLE = `p=<3,0,0>, v=<2,0,0>, a=<-1,0,0>
p=<4,0,0>, v=<0,0,0>, a=<-2,0,0>`;

describe("day 20", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(0);
    });

    it("input", () => {
      expect(part1(input)).to.equal(308);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(0);
    });

    it("input", () => {
      expect(part2(input)).to.equal(504);
    });
  });
});
