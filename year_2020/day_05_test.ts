import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const input = await Deno.readTextFile("year_2020/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("FBFBBFFRLR")).to.equal(357);
    });

    it("example 2", () => {
      expect(part1("BFFFBBFRRR")).to.equal(567);
    });

    it("example 3", () => {
      expect(part1("FFFBBBFRRR")).to.equal(119);
    });

    it("example 4", () => {
      expect(part1("BBFFBBFRLL")).to.equal(820);
    });

    it("input", () => {
      expect(part1(input)).to.equal(953);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(615);
    });
  });
});
