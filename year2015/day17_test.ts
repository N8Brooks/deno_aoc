import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day17.ts";

const EXAMPLE = `20
15
10
5
5`;

const input = await Deno.readTextFile("year2015/testdata/day17.txt");

describe("day17", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE, 25)).to.equal(4);
    });

    it("input", () => {
      expect(part1(input, 150)).to.equal(654);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE, 25)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input, 150)).to.equal(57);
    });
  });
});
