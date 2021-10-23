import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day24.ts";

const data = await Deno.readTextFile("year2015/day24_data.txt");

const example = "1 2 3 4 5 7 8 9 10 11";

describe("day24", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(99);
    });

    it("invalid", () => {
      expect(() => part1("a")).to.throw();
    });

    it("data", () => {
      expect(part1(data)).to.equal(10439961859);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(44);
    });

    it("invalid", () => {
      expect(() => part1("a")).to.throw();
    });

    it("data", () => {
      expect(part2(data)).to.equal(72050269);
    });
  });
});
