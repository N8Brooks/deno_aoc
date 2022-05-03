import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_07.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_07.txt");

const EXAMPLE = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

describe("day 7", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE)).to.equal("tknk");
    });

    it("input", () => {
      expect(part1(input)).to.equal("ahnofa");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(60);
    });

    it("input", () => {
      expect(part2(input)).to.equal(802);
    });
  });
});
