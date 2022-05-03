import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_04.ts";

const EXAMPLE = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`;

const input = await Deno.readTextFile("year_2018/testdata/day_04.txt");

describe("day 4", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE)).to.equal(240);
    });

    it("input", () => {
      expect(part1(input)).to.equal(94040);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(4455);
    });

    it("input", () => {
      expect(part2(input)).to.equal(39940);
    });
  });
});
