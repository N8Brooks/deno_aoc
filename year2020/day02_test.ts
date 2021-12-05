import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day02.ts";

const example = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const input = await Deno.readTextFile("year2020/testdata/day02.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(2);
    });

    it("input", () => {
      expect(part1(input)).to.equal(591);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(335);
    });
  });
});
