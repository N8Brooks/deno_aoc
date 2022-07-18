import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("1002,4,3,4,33")).to.be.NaN;
    });

    it("example 2", () => {
      expect(part1("1101,100,-1,4,0")).to.be.NaN;
    });

    it("input", () => {
      expect(part1(input)).to.equal(9006673);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("3,9,8,9,10,9,4,9,99,-1,8", 8)).to.equal(1);
    });

    it("example 2", () => {
      expect(part2("3,9,8,9,10,9,4,9,99,-1,8", 0)).to.equal(0);
    });

    it("example 3", () => {
      expect(part2("3,9,7,9,10,9,4,9,99,-1,8", 0)).to.equal(1);
    });

    it("example 4", () => {
      expect(part2("3,9,7,9,10,9,4,9,99,-1,8", 8)).to.equal(0);
    });

    it("example 5", () => {
      expect(part2("3,3,1108,-1,8,3,4,3,99", 0)).to.equal(0);
    });

    it("example 6", () => {
      // ? Should be 1
      expect(part2("3,3,1108,-1,8,3,4,3,99", 8)).to.equal(0);
    });

    it("example 7", () => {
      expect(part2("3,3,1107,-1,8,3,4,3,99", 0)).to.equal(1);
    });

    it("example 8", () => {
      // ? Should be 0
      expect(part2("3,3,1107,-1,8,3,4,3,99", 10)).to.equal(1);
    });

    it("example 9", () => {
      expect(part2("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9", 0)).to.equal(
        0,
      );
    });

    it("example 10", () => {
      expect(part2("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9", 10)).to.equal(
        1,
      );
    });

    it("example 11", () => {
      // ? Should be 1
      expect(part2("3,3,1105,-1,9,1101,0,0,12,4,12,99,1", 0)).to.equal(1);
    });

    it("example 12", () => {
      expect(part2("3,3,1105,-1,9,1101,0,0,12,4,12,99,1", 1)).to.equal(1);
    });

    it("example 13", () => {
      expect(
        part2(
          "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
          3,
        ),
      ).to.equal(999);
    });

    it("example 14", () => {
      expect(
        part2(
          "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
          8,
        ),
      ).to.equal(1000);
    });

    it("example 15", () => {
      expect(
        part2(
          "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
          10,
        ),
      ).to.equal(1001);
    });

    it("input", () => {
      expect(part2(input, 5)).to.equal(3629692);
    });
  });
});
