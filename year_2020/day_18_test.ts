import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_18.ts";

const input = await Deno.readTextFile("year_2020/testdata/day_18.txt");

describe("day 18", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("1 + 2 * 3 + 4 * 5 + 6")).to.equal(71);
    });

    it("example 2", () => {
      expect(part1("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example 3", () => {
      expect(part1("2 * 3 + (4 * 5)")).to.equal(26);
    });

    it("example 4", () => {
      expect(part1("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(437);
    });

    it("example 5", () => {
      expect(part1("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(
        12240,
      );
    });

    it("example 6", () => {
      expect(
        part1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
      ).to.equal(
        13632,
      );
    });

    it("input", () => {
      expect(part1(input)).to.equal(8929569623593);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("1 + 2 * 3 + 4 * 5 + 6")).to.equal(231);
    });

    it("example 2", () => {
      expect(part2("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example 3", () => {
      expect(part2("2 * 3 + (4 * 5)")).to.equal(46);
    });

    it("example 4", () => {
      expect(part2("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(1445);
    });

    it("example 5", () => {
      expect(part2("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(
        669060,
      );
    });

    it("example 6", () => {
      expect(
        part2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
      ).to.equal(
        23340,
      );
    });

    it("input", () => {
      expect(part2(input)).to.equal(231235959382961);
    });
  });
});
