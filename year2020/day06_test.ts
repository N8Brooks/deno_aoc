import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day06.ts";

const example1 = `abcx
abcy
abcz`;

const example2 = `abc

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

const data = await Deno.readTextFile("year2020/day06_data.txt");

describe("day06", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(6);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(11);
    });

    it("data", () => {
      expect(part1(data)).to.equal(6532);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(example1)).to.equal(3);
    });

    it("example2", () => {
      expect(part2(example2)).to.equal(6);
    });

    it("data", () => {
      expect(part2(data)).to.equal(3427);
    });
  });
});
