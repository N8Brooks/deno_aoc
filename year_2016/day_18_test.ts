import { describe, expect, it } from "../test_deps.ts";
import { part1, part2, safeTiles } from "./day_18.ts";

const EXAMPLE_1 = "..^^.";

const EXAMPLE_2 = ".^^.^.^^^^";

const input = await Deno.readTextFile("year_2016/testdata/day_18.txt");

describe("day 18", () => {
  describe("safe tiles", () => {
    it("example 1", () => {
      expect(safeTiles(EXAMPLE_1, 3)).to.equal(6);
    });

    it("example 2", () => {
      expect(safeTiles(EXAMPLE_2, 10)).to.equal(38);
    });
  });

  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(1939);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(19999535);
    });
  });
});
