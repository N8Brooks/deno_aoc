import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const EXAMPLE_1 = `abcx
abcy
abcz`;

const EXAMPLE_2 = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const input = await Deno.readTextFile("year_2020/testdata/day_06.txt");

describe("day_06", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE_1)).to.equal(6);
    });

    it("example2", () => {
      expect(part1(EXAMPLE_2)).to.equal(11);
    });

    it("input", () => {
      expect(part1(input)).to.equal(6532);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(EXAMPLE_1)).to.equal(3);
    });

    it("example2", () => {
      expect(part2(EXAMPLE_2)).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(3427);
    });
  });
});
