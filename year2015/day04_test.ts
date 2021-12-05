import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day04.ts";

const input = await Deno.readTextFile("year2015/testdata/day04.txt");

const example1 = "abcdef";

const example2 = "pqrstuv";

describe("day04", () => {
  describe("part1", () => {
    it("example1", async () => {
      expect(await part1(example1), 609043);
    });

    it("example2", async () => {
      expect(await part1(example1), 609043);
    });

    it("input", async () => {
      expect(await part1(input), 346386);
    });
  });

  describe("part2", () => {
    it("example1", async () => {
      expect(await part2(example1), 6742839);
    });

    it("example2", async () => {
      expect(await part2(example2), 5714438);
    });

    it("input", async () => {
      expect(await part2(input), 9958218);
    });
  });
});
