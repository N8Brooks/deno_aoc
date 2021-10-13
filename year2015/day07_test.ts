import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day07.ts";

let exampleIndex = 1;

const example = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

const part1Examples = {
  d: 72,
  e: 507,
  f: 492,
  g: 114,
  h: 65412,
  i: 65079,
  x: 123,
  y: 456,
};

const data = await Deno.readTextFile("year2015/day07_data.txt");

Deno.test("day07", async (t) => {
  await t.step("part1", async (t) => {
    for (const [wire, signal] of Object.entries(part1Examples)) {
      await t.step(`part1(example${exampleIndex++})`, () => {
        assertEquals(part1(example, wire), signal);
      });
    }

    await t.step("data", () => {
      assertEquals(part1(data, "a"), 16076);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 2797);
    });
  });
});
