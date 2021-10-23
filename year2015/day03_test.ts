import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2015/day03_data.txt");

describe("day03", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(">")).to.equal(2);
    });

    it("example2", () => {
      expect(part1("^>v<")).to.equal(4);
    });

    it("example3", () => {
      expect(part1("^v^v^v^v^v")).to.equal(2);
    });

    it("data", () => {
      expect(part1(data)).to.equal(2081);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(">v")).to.equal(3);
    });

    it("example2", () => {
      expect(part2("^>v<")).to.equal(3);
    });

    it("example3", () => {
      expect(part2("^v^v^v^v^v")).to.equal(11);
    });

    it("data", () => {
      expect(part2(data)).to.equal(2341);
    });
  });
});
