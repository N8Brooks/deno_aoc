import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2015/day01_data.txt");

describe("day01", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("(())")).to.equal(0);
    });

    it("example2", () => {
      expect(part1("()()")).to.equal(0);
    });

    it("example3", () => {
      expect(part1("(((")).to.equal(3);
    });

    it("example4", () => {
      expect(part1("(()(()(")).to.equal(3);
    });

    it("example5", () => {
      expect(part1("))(((((")).to.equal(3);
    });

    it("example6", () => {
      expect(part1("())")).to.equal(-1);
    });

    it("example7", () => {
      expect(part1("))(")).to.equal(-1);
    });

    it("example8", () => {
      expect(part1(")))")).to.equal(-3);
    });

    it("example9", () => {
      expect(part1(")())())")).to.equal(-3);
    });

    it("data", () => {
      expect(part1(data)).to.equal(232);
    });
  });

  describe("part2", () => {
    it("example10", () => {
      expect(part2(")")).to.equal(1);
    });

    it("example11", () => {
      expect(part2("()())")).to.equal(5);
    });

    it("invalid", () => {
      expect(() => part2("((((")).to.throw();
    });

    it("data", () => {
      expect(part2(data)).to.equal(1783);
    });
  });
});
