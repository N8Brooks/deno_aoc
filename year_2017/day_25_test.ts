import { describe, expect, it } from "../test_deps.ts";
import { part1 } from "./day_25.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_25.txt");

const EXAMPLE = `Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

describe("day 25", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(3);
    });

    it("input", () => {
      expect(part1(input)).to.equal(4225);
    });
  });
});
