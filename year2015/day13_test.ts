import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day13.ts";

const data = await Deno.readTextFile("year2015/testdata/day13.txt");

const example = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`;

describe("day13", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example)).to.equal(330);
    });

    it("data", () => {
      expect(part1(data)).to.equal(709);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example)).to.equal(286);
    });

    it("data", () => {
      expect(part2(data)).to.equal(668);
    });
  });
});
