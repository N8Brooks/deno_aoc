import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_10.ts";

const EXAMPLE = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

const input = await Deno.readTextFile("year_2021/testdata/day_10.txt");

describe("day 10", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(26397);
    });

    it("input", () => {
      expect(part1(input)).to.equal(370407);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(288957);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3249889609);
    });
  });
});
