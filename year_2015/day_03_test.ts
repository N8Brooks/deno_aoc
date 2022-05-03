import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_03.txt");

describe("day 3", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(">")).to.equal(2);
    });

    it("example 2", () => {
      expect(part1("^>v<")).to.equal(4);
    });

    it("example 3", () => {
      expect(part1("^v^v^v^v^v")).to.equal(2);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2081);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(">v")).to.equal(3);
    });

    it("example 2", () => {
      expect(part2("^>v<")).to.equal(3);
    });

    it("example 3", () => {
      expect(part2("^v^v^v^v^v")).to.equal(11);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2341);
    });
  });
});
