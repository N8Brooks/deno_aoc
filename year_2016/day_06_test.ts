import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_06.ts";

const EXAMPLE = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`;

const input = await Deno.readTextFile("year_2016/testdata/day_06.txt");

describe("day 6", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal("easter");
    });

    it("input", () => {
      expect(part1(input)).to.equal("gyvwpxaz");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal("advent");
    });

    it("input", () => {
      expect(part2(input)).to.equal("jucfoary");
    });
  });
});
