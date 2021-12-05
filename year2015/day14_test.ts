import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day14.ts";

const data = await Deno.readTextFile("year2015/testdata/day14.txt");

const example =
  `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

describe("day14", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example, 1000), 1120);
    });

    it("data", () => {
      expect(part1(data, 2503), 2696);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example, 1000), 689);
    });

    it("data", () => {
      expect(part2(data, 2503), 1084);
    });
  });
});
