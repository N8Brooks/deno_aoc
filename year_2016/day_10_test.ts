import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_10.ts";

const EXAMPLE = `value 5 goes to bot 2
bot 2 gives low to bot 1 and high to bot 0
value 3 goes to bot 1
bot 1 gives low to output 1 and high to bot 0
bot 0 gives low to output 2 and high to output 0
value 2 goes to bot 2`;

const input = await Deno.readTextFile("year_2016/testdata/day_10.txt");

describe("day 10", () => {
  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal(98);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(30);
    });

    it("input", () => {
      expect(part2(input)).to.equal(4042);
    });
  });
});
