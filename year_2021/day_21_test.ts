import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_21.ts";

const EXAMPLE = `Player 1 starting position: 4
Player 2 starting position: 8`;

const input = await Deno.readTextFile("year_2021/testdata/day_21.txt");

describe("day 21", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(739785);
    });

    it("input", () => {
      expect(part1(input)).to.equal(707784);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(444356092776315);
    });

    it("input", () => {
      expect(part2(input)).to.equal(157595953724471);
    });
  });
});
