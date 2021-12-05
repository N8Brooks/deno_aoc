import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day06.ts";

const example = `eedadn
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

const input = await Deno.readTextFile("year2016/testdata/day06.txt");

describe("day06", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal("easter");
    });

    it("input", () => {
      expect(part1(input)).to.equal("gyvwpxaz");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal("advent");
    });

    it("input", () => {
      expect(part2(input)).to.equal("jucfoary");
    });
  });
});
