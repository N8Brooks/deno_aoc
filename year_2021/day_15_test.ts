import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_15.ts";

const EXAMPLE = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

const input = await Deno.readTextFile("year_2021/testdata/day_15.txt");

describe("day 15", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(40);
    });

    it("input", () => {
      expect(part1(input)).to.equal(527);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(315);
    });

    it("input", () => {
      expect(part2(input)).to.equal(2887);
    });
  });
});
