import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_11.ts";

const EXAMPLE =
  `The first floor contains a hydrogen-compatible microchip and a lithium-compatible microchip.
The second floor contains a hydrogen generator.
The third floor contains a lithium generator.
The fourth floor contains nothing relevant.`;

const input = await Deno.readTextFile("year_2016/testdata/day_11.txt");

describe("day 11", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(11);
    });

    it("input", () => {
      expect(part1(input)).to.equal(31);
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(55);
    });
  });
});
