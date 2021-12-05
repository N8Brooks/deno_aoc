import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day07.ts";

const example1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`;

const example2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`;

const data = await Deno.readTextFile("year2016/testdata/day07.txt");

describe("day07", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(2);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(0);
    });

    it("data", () => {
      expect(part1(data)).to.equal(115);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(example1)).to.equal(0);
    });

    it("example2", () => {
      expect(part2(example2)).to.equal(3);
    });

    it("data", () => {
      expect(part2(data)).to.equal(231);
    });
  });
});
