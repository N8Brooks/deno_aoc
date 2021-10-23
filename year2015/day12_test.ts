import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day12.ts";

const data = await Deno.readTextFile("year2015/day12_data.txt");

describe("day12", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example2", () => {
      expect(part1('{"a":2,"b":4}'), 6);
    });

    it("example3", () => {
      expect(part1("[[[3]]]")).to.equal(3);
    });

    it("example4", () => {
      expect(part1('{"a":{"b":4},"c":-1}'), 3);
    });

    it("example5", () => {
      expect(part1('{"a":[-1,1]}'), 0);
    });

    it("example6", () => {
      expect(part1('[-1,{"a":1}]'), 0);
    });

    it("example7", () => {
      expect(part1("[]")).to.equal(0);
    });

    it("example8", () => {
      expect(part1("{}")).to.equal(0);
    });

    it("example9", () => {
      expect(part1('[1,{"c":"red","b":2},3]'), 6);
    });

    it("example10", () => {
      expect(part1('{"d":"red","e":[1,2,3,4],"f":5}'), 15);
    });

    it("example11", () => {
      expect(part1('[1,"red",5]'), 6);
    });

    it("data", () => {
      expect(part1(data)).to.equal(191164);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example2", () => {
      expect(part2('{"a":2,"b":4}'), 6);
    });

    it("example3", () => {
      expect(part2("[[[3]]]")).to.equal(3);
    });

    it("example4", () => {
      expect(part2('{"a":{"b":4},"c":-1}'), 3);
    });

    it("example5", () => {
      expect(part2('{"a":[-1,1]}'), 0);
    });

    it("example6", () => {
      expect(part2('[-1,{"a":1}]'), 0);
    });

    it("example7", () => {
      expect(part2("[]")).to.equal(0);
    });

    it("example8", () => {
      expect(part2("{}")).to.equal(0);
    });

    it("example9", () => {
      expect(part2('[1,{"c":"red","b":2},3]'), 4);
    });

    it("example10", () => {
      expect(part2('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
    });

    it("example11", () => {
      expect(part2('[1,"red",5]'), 6);
    });

    it("data", () => {
      expect(part2(data)).to.equal(87842);
    });
  });
});
