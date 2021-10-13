import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day12.ts";

const example = `F10
N3
F7
R90
F11`;

const data = await Deno.readTextFile("year2020/day12_data.txt");

Deno.test("day12", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 25);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 2847);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 286);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 29839);
    });
  });
});
