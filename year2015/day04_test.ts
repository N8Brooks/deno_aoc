import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day04.ts";

const input = await Deno.readTextFile("year2015/testdata/day04.txt");

describe("day04", () => {
  describe("part1", () => {
    it("example1", async () => {
      expect(await part1("abcdef")).to.equal(609043);
    });

    it("example2", async () => {
      expect(await part1("pqrstuv")).to.equal(1048970);
    });

    it("input", async () => {
      expect(await part1(input)).to.equal(346386);
    });
  });

  describe("part2", () => {
    it("input", async () => {
      expect(await part2(input)).to.equal(9958218);
    });
  });
});
