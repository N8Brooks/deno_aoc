import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_13.ts";

const EXAMPLE_1 = `939
7,13,x,x,59,x,31,19`;

const input = await Deno.readTextFile("year_2020/testdata/day_13.txt");

describe("day 13", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(295);
    });

    it("input", () => {
      expect(part1(input)).to.equal(4722);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(1068781);
    });

    it("example 2", () => {
      expect(part2("-1\n17,x,13,19")).to.equal(3417);
    });

    it("example 3", () => {
      expect(part2("-1\n67,7,59,61")).to.equal(754018);
    });

    it("example 4", () => {
      expect(part2("-1\n67,x,7,59,61")).to.equal(779210);
    });

    it("example 5", () => {
      expect(part2("-1\n67,7,x,59,61")).to.equal(1261476);
    });

    it("example 6", () => {
      expect(part2("-1\n1789,37,47,1889")).to.equal(1202161486);
    });

    it("input", () => {
      expect(part2(input)).to.equal(825305207525452);
    });
  });
});
