import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_12.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_12.txt");

describe("day 12", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example 2", () => {
      expect(part1('{"a":2,"b":4}')).to.equal(6);
    });

    it("example 3", () => {
      expect(part1("[[[3]]]")).to.equal(3);
    });

    it("example 4", () => {
      expect(part1('{"a":{"b":4},"c":-1}')).to.equal(3);
    });

    it("example 5", () => {
      expect(part1('{"a":[-1,1]}')).to.equal(0);
    });

    it("example 6", () => {
      expect(part1('[-1,{"a":1}]')).to.equal(0);
    });

    it("example 7", () => {
      expect(part1("[]")).to.equal(0);
    });

    it("example 8", () => {
      expect(part1("{}")).to.equal(0);
    });

    it("example 9", () => {
      expect(part1('[1,{"c":"red","b":2},3]')).to.equal(6);
    });

    it("example 10", () => {
      expect(part1('{"d":"red","e":[1,2,3,4],"f":5}')).to.equal(15);
    });

    it("example 11", () => {
      expect(part1('[1,"red",5]')).to.equal(6);
    });

    it("input", () => {
      expect(part1(input)).to.equal(191164);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example 2", () => {
      expect(part2('{"a":2,"b":4}')).to.equal(6);
    });

    it("example 3", () => {
      expect(part2("[[[3]]]")).to.equal(3);
    });

    it("example 4", () => {
      expect(part2('{"a":{"b":4},"c":-1}')).to.equal(3);
    });

    it("example 5", () => {
      expect(part2('{"a":[-1,1]}')).to.equal(0);
    });

    it("example 6", () => {
      expect(part2('[-1,{"a":1}]')).to.equal(0);
    });

    it("example 7", () => {
      expect(part2("[]")).to.equal(0);
    });

    it("example 8", () => {
      expect(part2("{}")).to.equal(0);
    });

    it("example 9", () => {
      expect(part2('[1,{"c":"red","b":2},3]')).to.equal(4);
    });

    it("example 10", () => {
      expect(part2('{"d":"red","e":[1,2,3,4],"f":5}')).to.equal(0);
    });

    it("example 11", () => {
      expect(part2('[1,"red",5]')).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(87842);
    });
  });
});
