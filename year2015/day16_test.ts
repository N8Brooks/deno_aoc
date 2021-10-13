import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day16.ts";

const data = await Deno.readTextFile("year2015/day16_data.txt");

Deno.test("day16", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("data", () => {
      assertEquals(part1(data), 213);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 323);
    });
  });
});
