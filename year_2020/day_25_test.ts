import { describe, expect, it } from "../test_deps.ts";
import { part1 } from "./day_25.ts";

const EXAMPLE = `5764801
17807724`;

const input = await Deno.readTextFile("year_2020/testdata/day_25.txt");

describe("day 25", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(14897079);
    });

    it("input", () => {
      expect(part1(input)).to.equal(9177528);
    });
  });
});
