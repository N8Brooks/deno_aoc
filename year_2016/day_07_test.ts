import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_07.ts";

const EXAMPLE_1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`;

const EXAMPLE_2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`;

const input = await Deno.readTextFile("year_2016/testdata/day_07.txt");

describe("day 7", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(2);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2)).to.equal(0);
    });

    it("input", () => {
      expect(part1(input)).to.equal(115);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(0);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input)).to.equal(231);
    });
  });
});
