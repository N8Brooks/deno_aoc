import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_19.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_19.txt");

describe("day 19", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1("5")).to.equal(3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1808357);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("5")).to.equal(2);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1407007);
    });
  });
});
