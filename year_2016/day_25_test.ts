import { describe, expect, it } from "../test_deps.ts";
import { part1 } from "./day_25.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_25.txt");

describe("day 25", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(182);
    });
  });
});
