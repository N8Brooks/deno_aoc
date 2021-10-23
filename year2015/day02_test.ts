import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2015/day02_data.txt");

describe("day02", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("2x3x4")).to.equal(58);
    });

    it("example2", () => {
      expect(part1("1x1x10")).to.equal(43);
    });

    it("data", () => {
      expect(part1(data)).to.equal(1606483);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("2x3x4")).to.equal(34);
    });

    it("example2", () => {
      expect(part2("1x1x10")).to.equal(14);
    });

    it("data", () => {
      expect(part2(data)).to.equal(3842356);
    });
  });
});
