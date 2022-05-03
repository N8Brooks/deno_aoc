import { describe, expect, it } from "../test_deps.ts";
import { evaluate, part1, part2, scramble } from "./day_21.ts";

const EXAMPLE = `swap position 4 with position 0
swap letter d with letter b
reverse positions 0 through 4
rotate left 1 step
move position 1 to position 4
move position 3 to position 0
rotate based on position of letter b
rotate based on position of letter d`;

const input = await Deno.readTextFile("year_2016/testdata/day_21.txt");

describe("day 21", () => {
  describe("evaluate", () => {
    const [a, b, c, d, e, f, g, h] = EXAMPLE.split("\n");

    it("swap position", () => {
      expect(evaluate(a, "abcde".split("")).join("")).to.equal("ebcda");
    });

    it("swap letter", () => {
      expect(evaluate(b, "ebcda".split("")).join("")).to.equal("edcba");
    });

    it("reverse positions", () => {
      expect(evaluate(c, "edcba".split("")).join("")).to.equal("abcde");
    });

    it("rotate left", () => {
      expect(evaluate(d, "abcde".split("")).join("")).to.equal("bcdea");
    });

    it("move position 1", () => {
      expect(evaluate(e, "bcdea".split("")).join("")).to.equal("bdeac");
    });

    it("move position 2", () => {
      expect(evaluate(f, "bdeac".split("")).join("")).to.equal("abdec");
    });

    it("rotate position 1", () => {
      expect(evaluate(g, "abdec".split("")).join("")).to.equal("ecabd");
    });

    it("rotate position 2", () => {
      expect(evaluate(h, "ecabd".split("")).join("")).to.equal("decab");
    });
  });

  describe("scramble", () => {
    it("example", () => {
      expect(scramble(EXAMPLE, "abcde".split(""))).to.equal("decab");
    });
  });

  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal("gbhcefad");
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal("gahedfcb");
    });
  });
});
