import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_14.ts";

const EXAMPLE = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

const input = await Deno.readTextFile("year_2021/testdata/day_14.txt");

describe("day 14", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(1588);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3831);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(2188189693529);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5725739914282);
    });
  });
});
