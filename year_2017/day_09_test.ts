import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_09.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_09.txt");

const EXAMPLE_1 = `{}, 
{{{}}}
{{},{}}
{{{},{},{{}}}}
{<a>,<a>,<a>,<a>}
{{<ab>},{<ab>},{<ab>},{<ab>}}
{{<!!>},{<!!>},{<!!>},{<!!>}}
{{<a!>},{<a!>},{<a!>},{<ab>}}`;

const EXAMPLE_2 = `<>
<random characters>
<<<<>
<{!>}>
<!!>
<!!!>>
<{o"i!a,<{i<a>`;

describe("day 9", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(50);
    });

    it("input", () => {
      expect(part1(input)).to.equal(11089);
    });
  });

  describe("part 2", () => {
    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(32);
    });

    it("input", () => {
      expect(part2(input)).to.equal(5288);
    });
  });
});
