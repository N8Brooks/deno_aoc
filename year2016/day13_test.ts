import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day13.ts";

const data = await Deno.readTextFile("year2016/day13_data.txt");

describe("day13", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("10", [7, 4])).to.equal(11);
    });

    it("data", () => {
      expect(part1(data, [31, 39])).to.equal(90);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("10")).to.equal(151);
    });

    it("data", () => {
      expect(part2(data)).to.equal(135);
    });
  });
});
