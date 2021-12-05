import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day03.ts";

const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

const data = await Deno.readTextFile("year2021/testdata/day03.txt");

describe("day03", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(198);
    });

    it("data", () => {
      expect(part1(data)).to.equal(3242606);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(230);
    });

    it("data", () => {
      expect(part2(data)).to.equal(4856080);
    });
  });
});
