import { describe, expect, it } from "../test_deps.ts";
import { part1 } from "./day_25.ts";

const EXAMPLE = `v...>>.vv>
.vv>>.vv..
>>.>v>...v
>>v>>.>.v.
v>v.vv.v..
>.>>..v...
.vv..>.>v.
v.v..>>v.v
....v..v.>`;

const input = await Deno.readTextFile("year_2021/testdata/day_25.txt");

describe("day 25", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(58);
    });

    it("input", () => {
      expect(part1(input)).to.equal(560);
    });
  });
});
