import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_14.ts";

const EXAMPLE = "abc";

const input = await Deno.readTextFile("year_2016/testdata/day_14.txt");

describe("day 14", () => {
  describe("part 1", () => {
    it("example", async () => {
      expect(await part1(EXAMPLE)).to.equal(22728);
    });

    it("input", async () => {
      expect(await part1(input)).to.equal(18626);
    });
  });

  describe("part 2", () => {
    it("example", async () => {
      expect(await part2(EXAMPLE)).to.equal(22551);
    });

    it("input", async () => {
      expect(await part2(input)).to.equal(20092);
    });
  });
});
