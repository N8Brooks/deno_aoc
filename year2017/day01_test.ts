import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2017/day01_data.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("1122")).to.equal(3);
    });

    it("example2", () => {
      expect(part1("1111")).to.equal(4);
    });

    it("example3", () => {
      expect(part1("1234")).to.equal(0);
    });

    it("example4", () => {
      expect(part1("91212129")).to.equal(9);
    });

    it("example5", () => {
      expect(part1("12131415")).to.equal(0);
    });

    it("data", () => {
      expect(part1(data)).to.equal(1136);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("1212")).to.equal(6);
    });

    it("example2", () => {
      expect(part2("1221")).to.equal(0);
    });

    it("example3", () => {
      expect(part2("123425")).to.equal(4);
    });

    it("example4", () => {
      expect(part2("123123")).to.equal(12);
    });

    it("example5", () => {
      expect(part2("12131415")).to.equal(4);
    });

    it("data", () => {
      expect(part2(data)).to.equal(1092);
    });
  });
});
