import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day06.ts";

const example1 = `abcx
abcy
abcz`;

const example2 = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const data = await Deno.readTextFile("year2020/day06_data.txt");

Deno.test("day06", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1), 6);
    });

    await t.step("example2", () => {
      assertEquals(part1(example2), 11);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 6532);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2(example1), 3);
    });

    await t.step("example2", () => {
      assertEquals(part2(example2), 6);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 3427);
    });
  });
});
