import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2016/day03_data.txt");

const example2 = `101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603`;

describe("day03", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("5 10 25")).to.equal(0);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(3);
    });

    it("data", () => {
      expect(part1(data)).to.equal(869);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2("5 10 25")).to.equal(0);
    });

    it("example2", () => {
      expect(part2(example2)).to.equal(6);
    });

    it("data", () => {
      expect(part2(data)).to.equal(1544);
    });
  });
});
