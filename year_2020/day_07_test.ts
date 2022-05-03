import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_07.ts";

const EXAMPLE_1 =
  `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const EXAMPLE_2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

const input = await Deno.readTextFile("year_2020/testdata/day_07.txt");

describe("day 7", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(4);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2)).to.equal(0);
    });

    it("input", () => {
      expect(part1(input)).to.equal(205);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(32);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(126);
    });

    it("input", () => {
      expect(part2(input)).to.equal(80902);
    });
  });
});
