import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day13.ts";

const data = await Deno.readTextFile("year2015/day13_data.txt");

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

Deno.test("day13", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 330);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 709);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 286);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 668);
    });
  });
});
