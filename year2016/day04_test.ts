import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day04.ts";

const input = await Deno.readTextFile("year2016/testdata/day04.txt");

const EXAMPLE_1 = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

describe("day04", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE_1)).to.equal(1514);
    });

    it("input", () => {
      expect(part1(input)).to.equal(361724);
    });
  });

  describe("part2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(482);
    });
  });
});
