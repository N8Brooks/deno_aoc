import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day13.ts";

const data = await Deno.readTextFile("year2016/day13_data.txt");

Deno.test("day13", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1("10", [7, 4]), 11);
    });

    await t.step("data", () => {
      assertEquals(part1(data, [31, 39]), 90);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2("10"), 151);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 135);
    });
  });
});
