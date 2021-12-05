import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day18.ts";

const data = await Deno.readTextFile("year2020/testdata/day18.txt");

describe("day18", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("1 + 2 * 3 + 4 * 5 + 6")).to.equal(71);
    });

    it("example2", () => {
      expect(part1("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example3", () => {
      expect(part1("2 * 3 + (4 * 5)")).to.equal(26);
    });

    it("example4", () => {
      expect(part1("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(437);
    });

    it("example5", () => {
      expect(part1("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(
        12240,
      );
    });

    it("example6", () => {
      expect(
        part1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
      ).to.equal(
        13632,
      );
    });

    it("data", () => {
      expect(part1(data)).to.equal(8929569623593);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("1 + 2 * 3 + 4 * 5 + 6")).to.equal(231);
    });

    it("example2", () => {
      expect(part2("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example3", () => {
      expect(part2("2 * 3 + (4 * 5)")).to.equal(46);
    });

    it("example4", () => {
      expect(part2("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(1445);
    });

    it("example5", () => {
      expect(part2("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(
        669060,
      );
    });

    it("example6", () => {
      expect(
        part2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
      ).to.equal(
        23340,
      );
    });

    it("data", () => {
      expect(part2(data)).to.equal(231235959382961);
    });
  });
});
