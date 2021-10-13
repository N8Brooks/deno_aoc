import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2016/day02_data.txt");

const example = `ULL
RRDDD
LURDL
UUUUD`;

Deno.test("day02", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), "1985");
    });

    await t.step("data", () => {
      assertEquals(part1(data), "24862");
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), "5DB3");
    });

    await t.step("data", () => {
      assertEquals(part2(data), "46C91");
    });
  });
});
