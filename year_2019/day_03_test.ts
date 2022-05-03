import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_03.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_03.txt");

const EXAMPLE_1 = `R8,U5,L5,D3
U7,R6,D4,L4`;

const EXAMPLE_2 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const EXAMPLE_3 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

describe("day 3", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(6);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2)).to.equal(159);
    });

    it("example 3", () => {
      expect(part1(EXAMPLE_3)).to.equal(135);
    });

    it("input", () => {
      expect(part1(input)).to.equal(1674);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(30);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(610);
    });

    it("example 3", () => {
      expect(part2(EXAMPLE_3)).to.equal(410);
    });

    it("input", () => {
      expect(part2(input)).to.equal(14012);
    });
  });
});
