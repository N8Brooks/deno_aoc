import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day20.ts";

const data = await Deno.readTextFile("year2015/day20_data.txt");

Deno.test("day20", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1("70"), 4);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 776160);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2("70"), 6);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 786240);
    });
  });
});
