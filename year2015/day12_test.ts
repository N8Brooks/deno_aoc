import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day12.ts";

const input = await Deno.readTextFile("year2015/testdata/day12.txt");

describe("day12", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example2", () => {
      expect(part1('{"a":2,"b":4}')).to.equal(6);
    });

    it("example3", () => {
      expect(part1("[[[3]]]")).to.equal(3);
    });

    it("example4", () => {
      expect(part1('{"a":{"b":4},"c":-1}')).to.equal(3);
    });

    it("example5", () => {
      expect(part1('{"a":[-1,1]}')).to.equal(0);
    });

    it("example6", () => {
      expect(part1('[-1,{"a":1}]')).to.equal(0);
    });

    it("example7", () => {
      expect(part1("[]")).to.equal(0);
    });

    it("example8", () => {
      expect(part1("{}")).to.equal(0);
    });

    it("example9", () => {
      expect(part1('[1,{"c":"red","b":2},3]')).to.equal(6);
    });

    it("example10", () => {
      expect(part1('{"d":"red","e":[1,2,3,4],"f":5}')).to.equal(15);
    });

    it("example11", () => {
      expect(part1('[1,"red",5]')).to.equal(6);
    });

    it("input", () => {
      expect(part1(input)).to.equal(191164);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example2", () => {
      expect(part2('{"a":2,"b":4}')).to.equal(6);
    });

    it("example3", () => {
      expect(part2("[[[3]]]")).to.equal(3);
    });

    it("example4", () => {
      expect(part2('{"a":{"b":4},"c":-1}')).to.equal(3);
    });

    it("example5", () => {
      expect(part2('{"a":[-1,1]}')).to.equal(0);
    });

    it("example6", () => {
      expect(part2('[-1,{"a":1}]')).to.equal(0);
    });

    it("example7", () => {
      expect(part2("[]")).to.equal(0);
    });

    it("example8", () => {
      expect(part2("{}")).to.equal(0);
    });

    it("example9", () => {
      expect(part2('[1,{"c":"red","b":2},3]')).to.equal(4);
    });

    it("example10", () => {
      expect(part2('{"d":"red","e":[1,2,3,4],"f":5}')).to.equal(0);
    });

    it("example11", () => {
      expect(part2('[1,"red",5]')).to.equal(6);
    });

    it("input", () => {
      expect(part2(input)).to.equal(87842);
    });
  });
});
