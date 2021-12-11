import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day02.ts";

const EXAMPLE = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const input = await Deno.readTextFile("year2021/testdata/day02.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(150);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1855814);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(900);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1845455714);
    });
  });
});
