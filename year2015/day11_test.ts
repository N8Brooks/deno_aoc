import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day11.ts";

const data = await Deno.readTextFile("year2015/day11_data.txt");

Deno.test("day11", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1("abcdefgh"), "abcdffaa");
    });

    await t.step("data", () => {
      assertEquals(part1(data), "hxbxxyzz");
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2("abcdefgh"), "abcdffbb");
    });

    await t.step("data", () => {
      assertEquals(part2(data), "hxcaabcc");
    });
  });
});
