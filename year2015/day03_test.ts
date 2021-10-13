import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2015/day03_data.txt");

Deno.test("day03", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(">"), 2);
    });

    await t.step("example2", () => {
      assertEquals(part1("^>v<"), 4);
    });

    await t.step("example3", () => {
      assertEquals(part1("^v^v^v^v^v"), 2);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 2081);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2(">v"), 3);
    });

    await t.step("example2", () => {
      assertEquals(part2("^>v<"), 3);
    });

    await t.step("example3", () => {
      assertEquals(part2("^v^v^v^v^v"), 11);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 2341);
    });
  });
});
