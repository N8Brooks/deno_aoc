import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_08.ts";

const EXAMPLE = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

const input = await Deno.readTextFile("year_2020/testdata/day_08.txt");

describe("day 8", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1766);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(8);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1639);
    });
  });
});
