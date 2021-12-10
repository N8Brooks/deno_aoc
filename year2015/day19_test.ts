import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day19.ts";

const example1 = `H => HO
H => OH
O => HH

HOH`;

const example2 = `H => HO
H => OH
O => HH

HOHOHO`;

const example3 = `e => H
e => O
H => HO
H => OH
O => HH

HOH`;

const example4 = `e => H
e => O
H => HO
H => OH
O => HH

HOHOHO`;

const input = await Deno.readTextFile("year2015/testdata/day19.txt");

describe("day19", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(4);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(576);
    });
  });

  describe("part2", () => {
    it("example2", () => {
      expect(part2(example3)).to.equal(3);
    });

    it("example3", () => {
      expect(part2(example4)).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(207);
    });
  });
});
