import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_14.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_14.txt");

const EXAMPLE =
  `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

describe("day 14", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE, 1000)).to.equal(1120);
    });

    it("input", () => {
      expect(part1(input, 2503)).to.equal(2696);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 1000)).to.equal(689);
    });

    it("input", () => {
      expect(part2(input, 2503)).to.equal(1084);
    });
  });
});
