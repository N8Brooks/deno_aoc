import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_01.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_01.txt");

describe("day 1", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("(())")).to.equal(0);
    });

    it("example 2", () => {
      expect(part1("()()")).to.equal(0);
    });

    it("example 3", () => {
      expect(part1("(((")).to.equal(3);
    });

    it("example 4", () => {
      expect(part1("(()(()(")).to.equal(3);
    });

    it("example 5", () => {
      expect(part1("))(((((")).to.equal(3);
    });

    it("example 6", () => {
      expect(part1("())")).to.equal(-1);
    });

    it("example 7", () => {
      expect(part1("))(")).to.equal(-1);
    });

    it("example 8", () => {
      expect(part1(")))")).to.equal(-3);
    });

    it("example 9", () => {
      expect(part1(")())())")).to.equal(-3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(232);
    });
  });

  describe("part 2", () => {
    it("example 10", () => {
      expect(part2(")")).to.equal(1);
    });

    it("example 11", () => {
      expect(part2("()())")).to.equal(5);
    });

    it("invalid", () => {
      expect(() => part2("((((")).to.throw();
    });

    it("input", () => {
      expect(part2(input)).to.equal(1783);
    });
  });
});
