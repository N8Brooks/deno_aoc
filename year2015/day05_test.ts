import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day05.ts";

let exampleIndex = 1;

const part1NiceExamples = [
  "ugknbfddgicrmopn",
  "aaa",
];

const part1NaughtyExamples = [
  "jchzalrnumimnmhp",
  "haegwjzuvuyypxyu",
  "dvszwmarrgswjxmb",
];

const part2NiceExamples = [
  "qjhvhtzxzqqjkmpb",
  "xxyxx",
];

const part2NaughtyExamples = [
  "uurcxstgmygtbstg",
  "ieodomkazucvgmuy",
];

const input = await Deno.readTextFile("year2015/testdata/day05.txt");

describe("day05", () => {
  describe("part1", () => {
    for (const nice of part1NiceExamples) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part1(nice)).to.equal(1);
      });
    }

    for (const naughty of part1NaughtyExamples) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part1(naughty)).to.equal(0);
      });
    }

    it("part1(input)", () => {
      expect(part1(input)).to.equal(238);
    });
  });

  describe("part2", () => {
    for (const nice of part2NiceExamples) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part2(nice)).to.equal(1);
      });
    }

    for (const naughty of part2NaughtyExamples) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part2(naughty)).to.equal(0);
      });
    }

    it("part2(input)", () => {
      expect(part2(input)).to.equal(69);
    });
  });
});
