import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_07.ts";

const EXAMPLE = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

const input = await Deno.readTextFile("year_2018/testdata/day_07.txt");

describe("day 7", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE)).to.equal("CABDFE");
    });

    it("input", () => {
      expect(part1(input)).to.equal("HEGMPOAWBFCDITVXYZRKUQNSLJ");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 2, 0)).to.equal(15);
    });

    it("input", () => {
      expect(part2(input, 5, 60)).to.equal(1226);
    });
  });
});
