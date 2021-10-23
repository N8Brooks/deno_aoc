import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day09.ts";

const data = await Deno.readTextFile("year2015/day09_data.txt");

const example = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;

describe("day09", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(605);
    });

    it("data", () => {
      expect(part1(data)).to.equal(117);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(982);
    });

    it("data", () => {
      expect(part2(data)).to.equal(909);
    });
  });
});
