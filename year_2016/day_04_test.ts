import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_04.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_04.txt");

const EXAMPLE_1 = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

describe("day 4", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(1514);
    });

    it("input", () => {
      expect(part1(input)).to.equal(361724);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(482);
    });
  });
});
