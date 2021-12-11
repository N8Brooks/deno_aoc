import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_19.ts";

const EXAMPLE_1 = `H => HO
H => OH
O => HH

HOH`;

const EXAMPLE_2 = `H => HO
H => OH
O => HH

HOHOHO`;

const EXAMPLE_3 = `e => H
e => O
H => HO
H => OH
O => HH

HOH`;

const EXAMPLE_4 = `e => H
e => O
H => HO
H => OH
O => HH

HOHOHO`;

const input = await Deno.readTextFile("year_2015/testdata/day_19.txt");

describe("day_19", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE_1)).to.equal(4);
    });

    it("example2", () => {
      expect(part1(EXAMPLE_2)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(576);
    });
  });

  describe("part2", () => {
    it("example2", () => {
      expect(part2(EXAMPLE_3)).to.equal(3);
    });

    it("example3", () => {
      expect(part2(EXAMPLE_4)).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(207);
    });
  });
});
