import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2020/day05_data.txt");

describe("day05", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("FBFBBFFRLR")).to.equal(357);
    });

    it("example2", () => {
      expect(part1("BFFFBBFRRR")).to.equal(567);
    });

    it("example3", () => {
      expect(part1("FFFBBBFRRR")).to.equal(119);
    });

    it("example4", () => {
      expect(part1("BBFFBBFRLL")).to.equal(820);
    });

    it("data", () => {
      expect(part1(data)).to.equal(953);
    });
  });

  describe("part2", () => {
    it("data", () => {
      expect(part2(data)).to.equal(615);
    });
  });
});
