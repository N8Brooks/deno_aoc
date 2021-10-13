import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2018/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("+1 -2 +3 +1"), 3);
    });

    await t.step("example2", () => {
      assertEquals(part1("+1 +1 +1"), 3);
    });

    await t.step("example3", () => {
      assertEquals(part1("+1 +1 -2"), 0);
    });

    await t.step("example4", () => {
      assertEquals(part1("-1 -2 -3"), -6);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 599);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("+1 -2 +3 +1"), 2);
    });

    await t.step("example2", () => {
      assertEquals(part2("+1 -1"), 0);
    });

    await t.step("example3", () => {
      assertEquals(part2("+3 +3 +4 -2 -4"), 10);
    });

    await t.step("example4", () => {
      assertEquals(part2("-6 +3 +8 +5 -6"), 5);
    });

    await t.step("example5", () => {
      assertEquals(part2("+7 +7 -2 -7 -4"), 14);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 81204);
    });
  });
});
