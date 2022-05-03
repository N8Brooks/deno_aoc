import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_04.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_04.txt");

describe("day 4", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("111111-111111")).to.equal(1);
    });

    it("example 2", () => {
      expect(part1("223450-223450")).to.equal(0);
    });

    it("example 3", () => {
      expect(part1("123789-123789")).to.equal(0);
    });

    it("input", () => {
      expect(part1(input)).to.equal(495);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("112233-112233")).to.equal(1);
    });

    it("example 2", () => {
      expect(part2("123444-123444")).to.equal(0);
    });

    it("example 3", () => {
      expect(part2("111122-111122")).to.equal(1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(305);
    });
  });
});
