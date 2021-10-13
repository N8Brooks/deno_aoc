import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const example = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const data = await Deno.readTextFile("year2020/day02_data.txt");

Deno.test("day02", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 2);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 591);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 1);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 335);
    });
  });
});
