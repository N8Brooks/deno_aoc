import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_02.ts";

const EXAMPLE_1 = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

const EXAMPLE_2 = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

const input = await Deno.readTextFile("year_2018/testdata/day_02.txt");

describe("day 2", () => {
  describe("part 1", () => {
    it("example ", () => {
      expect(part1(EXAMPLE_1)).to.equal(12);
    });

    it("input", () => {
      expect(part1(input)).to.equal(5681);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE_2)).to.equal("fgij");
    });

    it("input", () => {
      expect(part2(input)).to.equal("uqyoeizfvmbistpkgnocjtwld");
    });
  });
});
