import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day02.ts";

const example = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const data = await Deno.readTextFile("year2021/testdata/day02.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(150);
    });

    it("data", () => {
      expect(part1(data)).to.equal(1855814);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(900);
    });

    it("data", () => {
      expect(part2(data)).to.equal(1845455714);
    });
  });
});
