import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day04.ts";

const data = await Deno.readTextFile("year2016/day04_data.txt");

const example1 = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

describe("day04", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(1514);
    });

    it("data", () => {
      expect(part1(data)).to.equal(361724);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(482);
    });
  });
});
