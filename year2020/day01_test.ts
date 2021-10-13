import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const example = `1721
979
366
299
675
1456`;

const data = await Deno.readTextFile("year2020/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 514579);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 482811);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 241861950);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 193171814);
    });
  });
});
