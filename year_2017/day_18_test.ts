import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_18.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_18.txt");

const EXAMPLE_1 = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

const EXAMPLE_2 = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`;

describe("day 18", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE_1)).to.equal(4);
    });

    it("input", () => {
      expect(part1(input)).to.equal(7071);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE_2)).to.equal(3);
    });

    it("input", () => {
      expect(part2(input)).to.equal(8001);
    });
  });
});
