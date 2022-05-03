import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_21.ts";

const EXAMPLE = `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`;

const input = await Deno.readTextFile("year_2020/testdata/day_21.txt");

describe("day 21", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(5);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2786);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("mxmxvkd,sqjhc,fvjkl");
    });

    it("input", () => {
      expect(part2(input)).to.equal(
        "prxmdlz,ncjv,knprxg,lxjtns,vzzz,clg,cxfz,qdfpq",
      );
    });
  });
});
