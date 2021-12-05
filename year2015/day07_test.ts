import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day07.ts";

let exampleIndex = 1;

const example = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

const part1Examples = {
  d: 72,
  e: 507,
  f: 492,
  g: 114,
  h: 65412,
  i: 65079,
  x: 123,
  y: 456,
};

const data = await Deno.readTextFile("year2015/testdata/day07.txt");

describe("day07", () => {
  describe("part1", () => {
    for (const [wire, signal] of Object.entries(part1Examples)) {
      it(`part1(example${exampleIndex++})`, () => {
        expect(part1(example, wire)).to.equal(signal);
      });
    }

    it("data", () => {
      expect(part1(data, "a")).to.equal(16076);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(2797);
    });
  });
});
