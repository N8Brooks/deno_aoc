import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day17.ts";

const example = `20
15
10
5
5`;

const data = await Deno.readTextFile("year2015/day17_data.txt");

describe("day17", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example, 25), 4);
    });

    it("data", () => {
      expect(part1(data, 150), 654);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example, 25), 3);
    });

    it("data", () => {
      expect(part2(data, 150), 57);
    });
  });
});
