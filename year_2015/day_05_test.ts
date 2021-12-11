import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day05.ts";

let exampleIndex = 1;

const PART_1_NICE = [
  "ugknbfddgicrmopn",
  "aaa",
];

const PART_1_NAUGHTY = [
  "jchzalrnumimnmhp",
  "haegwjzuvuyypxyu",
  "dvszwmarrgswjxmb",
];

const PART_2_NICE = [
  "qjhvhtzxzqqjkmpb",
  "xxyxx",
];

const PART_2_NAUGHTY = [
  "uurcxstgmygtbstg",
  "ieodomkazucvgmuy",
];

const input = await Deno.readTextFile("year2015/testdata/day05.txt");

describe("day05", () => {
  describe("part1", () => {
    for (const nice of PART_1_NICE) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part1(nice)).to.equal(1);
      });
    }

    for (const naughty of PART_1_NAUGHTY) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part1(naughty)).to.equal(0);
      });
    }

    it("part1(input)", () => {
      expect(part1(input)).to.equal(238);
    });
  });

  describe("part2", () => {
    for (const nice of PART_2_NICE) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part2(nice)).to.equal(1);
      });
    }

    for (const naughty of PART_2_NAUGHTY) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part2(naughty)).to.equal(0);
      });
    }

    it("part2(input)", () => {
      expect(part2(input)).to.equal(69);
    });
  });
});