import { describe, expect, it } from "../test_deps.ts";
import {
  checksum,
  dragonChecksum,
  dragonCurve,
  part1,
  part2,
} from "./day_16.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_16.txt");

describe("day 16", () => {
  describe("dragon curve", () => {
    it("example 1", () => {
      expect(dragonCurve("1", 3)).to.equal("100");
    });

    it("example 2", () => {
      expect(dragonCurve("0", 3)).to.equal("001");
    });

    it("example 3", () => {
      expect(dragonCurve("11111", 11)).to.equal("11111000000");
    });

    it("example 4", () => {
      expect(dragonCurve("111100001010", 25)).to.equal(
        "1111000010100101011110000",
      );
    });

    it("example 5", () => {
      expect(dragonCurve("10000", 20)).to.equal("10000011110010000111110");
    });
  });

  describe("checksum", () => {
    it("example", () => {
      expect(checksum("110010110100")).to.equal("100");
    });
  });

  describe("dragon checksum", () => {
    it("example", () => {
      expect(dragonChecksum("10000", 20)).to.equal("01100");
    });
  });

  describe("part 1", () => {
    it("input", () => {
      expect(part1(input)).to.equal("10100011010101011");
    });
  });

  describe("part 2", () => {
    it("input", () => {
      expect(part2(input)).to.equal("01010001101011001");
    });
  });
});
