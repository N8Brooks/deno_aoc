import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_11.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_11.txt");

describe("day 11", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("ne,ne,ne")).to.equal(3);
    });

    it("example 2", () => {
      expect(part1("ne,ne,sw,sw")).to.equal(0);
    });

    it("example 3", () => {
      expect(part1("ne,ne,s,s")).to.equal(2);
    });

    it("example 4", () => {
      expect(part1("se,sw,se,sw,sw")).to.equal(3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(784);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("ne,ne,ne")).to.equal(3);
    });

    it("example 2", () => {
      expect(part2("ne,ne,sw,sw")).to.equal(2);
    });

    it("example 3", () => {
      expect(part2("ne,ne,s,s")).to.equal(2);
    });

    it("example 4", () => {
      expect(part2("se,sw,se,sw,sw")).to.equal(3);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1558);
    });
  });
});
