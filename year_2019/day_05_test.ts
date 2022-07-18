import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("1002,4,3,4,33")).to.equal(99);
    });

    it("example 2", () => {
      expect(part1("1101,100,-1,4,0")).to.equal(99);
    });

    it("input", () => {
      expect(part1(input)).to.equal(-1);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2("")).to.equal(-1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(-1);
    });
  });
});
