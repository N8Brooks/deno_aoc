import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2016/day05_data.txt");

describe("day05", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1("abc")).to.equal("18f47a30");
    });

    it("data", () => {
      expect(part1(data)).to.equal("c6697b55");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2("abc")).to.equal("05ace8e3");
    });

    it("data", () => {
      expect(part2(data)).to.equal("8c35d1ab");
    });
  });
});
