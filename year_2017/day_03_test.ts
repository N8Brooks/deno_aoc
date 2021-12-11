import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_03.txt");

describe("day_03", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("1")).to.equal(0);
    });

    it("example2", () => {
      expect(part1("12")).to.equal(3);
    });

    it("example3", () => {
      expect(part1("23")).to.equal(2);
    });

    it("example4", () => {
      expect(part1("1024")).to.equal(31);
    });

    it("input", () => {
      expect(part1(input)).to.equal(480);
    });
  });

  describe("part2", () => {
    it("input", () => {
      expect(part2(input)).to.equal(349975);
    });
  });
});
