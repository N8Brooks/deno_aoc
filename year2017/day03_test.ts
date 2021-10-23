import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2017/day03_data.txt");

describe("day03", () => {
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

    it("data", () => {
      expect(part1(data)).to.equal(480);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(349975);
    });
  });
});
