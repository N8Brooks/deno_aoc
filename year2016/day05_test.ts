import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2016/day05_data.txt");

Deno.test("day05", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1("abc"), "18f47a30");
    });

    await t.step("data", () => {
      assertEquals(part1(data), "c6697b55");
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2("abc"), "05ace8e3");
    });

    await t.step("data", () => {
      assertEquals(part2(data), "8c35d1ab");
    });
  });
});
