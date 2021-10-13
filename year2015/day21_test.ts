import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day21.ts";

const text = await Deno.readTextFile("year2015/day21_data.txt");

Deno.test("day21", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1("8 5 5", 12), 65);
    });

    await t.step("data", () => {
      assertEquals(part1(text, 100), 111);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2("6 7 2", 8), 88);
    });

    await t.step("data", () => {
      assertEquals(part2(text, 100), 188);
    });
  });
});
