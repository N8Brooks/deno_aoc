import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day02.ts";

const example1 = `5 1 9 5
7 5 3
2 4 6 8`;

const example2 = `5 9 2 8
9 4 7 3
3 8 6 5`;

const data = await Deno.readTextFile("year2017/day02_data.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(18);
    });

    it("data", () => {
      expect(part1(data)).to.equal(51833);
    });
  });

  describe("part2", () => {
    it("example2", () => {
      expect(part2(example2)).to.equal(9);
    });

    it("data", () => {
      expect(part2(data)).to.equal(288);
    });
  });
});
