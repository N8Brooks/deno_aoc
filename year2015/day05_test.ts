import { expect } from "../test/setup.ts";
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

const data = await Deno.readTextFile("year2015/day05_data.txt");

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

    it("part1(data)", () => {
      expect(part1(data)).to.equal(238);
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

    it("part2(data)", () => {
      expect(part2(data)).to.equal(69);
    });
  });
});
