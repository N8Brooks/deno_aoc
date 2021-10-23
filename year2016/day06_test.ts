import { expect } from "../test/setup.ts";
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

const data = await Deno.readTextFile("year2016/day06_data.txt");

describe("day06", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal("easter");
    });

    it("data", () => {
      expect(part1(data)).to.equal("gyvwpxaz");
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal("advent");
    });

    it("data", () => {
      expect(part2(data)).to.equal("jucfoary");
    });
  });
});
