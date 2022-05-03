import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_04.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_04.txt");

describe("day 4", () => {
  describe("part 1", () => {
    it("example 1", async () => {
      expect(await part1("abcdef")).to.equal(609043);
    });

    it("example 2", async () => {
      expect(await part1("pqrstuv")).to.equal(1048970);
    });

    it("input", async () => {
      expect(await part1(input)).to.equal(346386);
    });
  });

  describe("part 2", () => {
    it("input", async () => {
      expect(await part2(input)).to.equal(9958218);
    });
  });
});
