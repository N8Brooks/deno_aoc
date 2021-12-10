import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day10.ts";

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

const input = await Deno.readTextFile("year2021/testdata/day10.txt");

describe("day10", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(26397);
    });

    it("input", () => {
      expect(part1(input)).to.equal(370407);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(288957);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3249889609);
    });
  });
});
