import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day07.ts";

const EXAMPLE_1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`;

const EXAMPLE_2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`;

const input = await Deno.readTextFile("year2016/testdata/day07.txt");

describe("day07", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE_1)).to.equal(2);
    });

    it("example2", () => {
      expect(part1(EXAMPLE_2)).to.equal(0);
    });

    it("input", () => {
      expect(part1(input)).to.equal(115);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(EXAMPLE_1)).to.equal(0);
    });

    it("example2", () => {
      expect(part2(EXAMPLE_2)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input)).to.equal(231);
    });
  });
});
