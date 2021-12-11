import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day03.ts";

const input = await Deno.readTextFile("year2016/testdata/day03.txt");

const EXAMPLE_1 = "5 10 25";

const EXAMPLE_2 = `101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603`;

describe("day03", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(EXAMPLE_1)).to.equal(0);
    });

    it("example2", () => {
      expect(part1(EXAMPLE_2)).to.equal(3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(869);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(EXAMPLE_1)).to.equal(0);
    });

    it("example2", () => {
      expect(part2(EXAMPLE_2)).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(1544);
    });
  });
});
